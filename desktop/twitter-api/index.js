let express = require('express');
let path = require('path');
const cors = require('cors');
const { Pool } = require('pg');
const { DATABASE_URL, PORT, SECRET_KEY } = process.env;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

let app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    require: true,
  },
});

async function getPostgresVersion() {
  const client = await pool.connect();
  try {
    const response = await client.query('SELECT version()');
    console.log(response.rows[0].version);
  } finally {
    client.release();
  }
}

getPostgresVersion();

app.get('/posts/user/:user_id', async (req, res) => {
  const { user_id } = req.params;
  const client = await pool.connect();

  try {
    const posts = await client.query('SELECT * FROM posts WHERE user_id = $1', [user_id]);
    if (posts.rowCount > 0) {
      res.json(posts.rows);
    } else {
      res.status(404).json({ error: 'No post found for this user' });
    }
  } catch (error) {
    console.error('Error', error.message);
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
  }
});

// Fetch a post by ID and increment views
app.get('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const client = await pool.connect();

  try {
    // Fetch post data
    const postQuery = await client.query('SELECT * FROM posts WHERE id = $1', [id]);
    const post = postQuery.rows[0];

    // Increment views count
    await client.query('UPDATE posts SET views = views + 1 WHERE id = $1', [id]);

    res.json(post);
  } catch (err) {
    console.log(err.stack);
    res.status(500).send('An error occurred, please try again.');
  } finally {
    client.release();
  }
});

// Post endpoint
app.post('/posts', async (req, res) => {
  const { title, content, user_id } = req.body;
  const client = await pool.connect();
  try {
    // Check idf user exists
    const userExists = await client.query('SELECT id FROM users WHERE id = $1', [user_id]);
    if (userExists.rows.length > 0) {
      // User exists, add post
      const post = await client.query('INSERT INTO posts ( title, content, user_id, created_at) VALUES ($1, $2, $3, CURRENT_TIMESTAMP) RETURNING *', [title, content, user_id]);
      //Send new post data back to client
      res.json(post.rows[0]);
    } else {
      // User does not exists
      res.status(400).json({ error: "User does not exists" });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ error: "Something went wrong, please try again later!" });
  } finally {
    client.release();
  }
});

// Post & Update comments in posts endpoint
app.put('/posts/:id', async (req, res) => {
  const { comments } = req.body;
  const { id } = req.params;
  const client = await pool.connect();
  try {
    // Check if the post with given id exists
    const postExists = await client.query('SELECT id FROM posts WHERE id = $1', [id]);

    if (postExists.rows.length > 0) {
      // User exists, add comment
      const comment = await client.query('UPDATE posts SET comments = $1, created_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *', [comments, id]);
      //Send new comment data back to client
      res.json(comment.rows[0]);
    } else {
      // User does not exists
      res.status(400).json({ error: "User does not exists" });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ error: "Something went wrong, please try again later!" });
  } finally {
    client.release();
  }
});

// Fetch a comment by ID 
app.get('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const client = await pool.connect();

  try {
    // Fetch post data
    const commentQuery = await client.query('SELECT comments FROM posts WHERE id = $1 RETURNING comments', [id]);
    const comment = commentQuery.rows[0];
    res.json(comment);
  } catch (err) {
    console.log(err.stack);
    res.status(500).send('An error occurred, please try again.');
  } finally {
    client.release();
  }
});

// Update a comment by ID
/*app.put('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const client = await pool.connect();

  try {
    //Update the like row to inactive
    await client.query('UPDATE posts SET comments = $1 WHERE id = $2 ', [id]);
    res.json({ message: "The comments has been successfully updated!" });
  } catch (error) {
    console.log('Error', error.message);
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
  }
});*/

// Delete comment from a post
app.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const client = await pool.connect();

  try {
    await client.query('UPDATE posts SET comments = NULL WHERE id = $1', [id]);
    res.json({ message: "Comments Deleted Succesfully" });
  } catch (err) {
    console.log(err.stack);
    res.status(500).send('An error occured, please try again.')
  } finally {
    client.release();
  }
});

//Adding to like to a post
app.post('/likes', async (req, res) => {
  const { user_id, post_id } = req.body;
  const client = await pool.connect();

  try {
    //check if an inactive like for this user and post already exists
    const prevLike = await client.query(`SELECT * FROM likes WHERE user_id = $1 AND post_id = $2 AND active = false`, [user_id, post_id]);
    if (prevLike.rowCount > 0) {
      // if the inactive like exists, update it to active
      const newLike = await client.query(`UPDATE likes SET active = true WHERE id = $1 RETURNING * `, [prevLike.rows[0].id]);
      res.json(newLike.rows[0]);
    } else {
      // if it does not exists, insert new like row with active as true
      const newLike = await client.query('INSERT INTO likes (user_id, post_id, created_at, active) VALUES ($1, $2, CURRENT_TIMESTAMP, true) RETURNING *', [user_id, post_id]);
      res.json(newLike.rows[0]);
    }
  } catch (error) {
    console.log(err.stack);
    res.status(500).send('An error occured, please try again.')
  } finally {
    client.release();
  }
});

// Delete like from a post
app.delete('/likes/:id', async (req, res) => {
  const { id } = req.params;
  const client = await pool.connect();

  try {
    await client.query('DELETE FROM likes WHERE id = $1', [id]);
    res.json({ message: "Like Deleted Succesfully" });
  } catch (err) {
    console.log(err.stack);
    res.status(500).send('An error occured, please try again.')
  } finally {
    client.release();
  }
});

app.get('/likes/post/:post_id', async (req, res) => {
  const { post_id } = req.params;
  const client = await pool.connect();

  try {
    //Fetch all likes for the specific post
    const likes = await client.query('SELECT users.username FROM likes INNER JOIN users ON likes.user_id = users.id WHERE likes.post_id = $1', [post_id]);
    const result = likes.rows.map(row => row.username); //  maps the username property of each row object, resulting in an array of usernames. 
    res.json(result);
  } catch (err) {
    console.log(err.stack);
    res.status(500).send('An error occured, please try again.')
  } finally {
    client.release();
  }
});

/*app.get('/likes/post/:post_id', async (req, res) => {
  const { post_id } = req.params;
  const client = await pool.connect();

  try {
    //Fetch all likes for the specific post
    const likes = await client.query('SELECT users.username, users.id AS user_id, likes.id AS likes_id FROM likes INNER JOIN users ON likes.user_id = users.id WHERE likes.post_id = $1 AND active = true', [post_id]);
    res.json(likes.rows);
  } catch (err) {
    console.log(err.stack);
    res.status(500).send('An error occured, please try again.')
  } finally {
    client.release();
  }
});*/

app.put('/likes/:userId/:post_id', async (req, res) => {
  const { userId, post_id } = req.params;
  const client = await pool.connect();

  try {
    //Update the like row to inactive
    await client.query('UPDATE likes SET active = false WHERE user_id = $1 AND post_id = $2 AND active = true', [userId, post_id]);
    res.json({ message: "The like has been removed successfully!" });
  } catch (error) {
    console.log('Error', error.message);
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
  }
});

app.get('/', (req, res) => {
  res.status(200).json({ message: "Welcome to the twitterAPI!" });
});

const port = PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});


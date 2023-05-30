const BASE_URL = 'https://jsonplaceholder.typicode.com'

async function getUser(id) {
    const response = await fetch(`${BASE_URL}/users?id=${id}`)
    const [user] = await response.json()
    return user
}

async function getPosts(userID, limit) {
    const response = await fetch(`${BASE_URL}/posts?userId=${userID}`)
    const data = await response.json()
    const posts = data.slice(0, limit)
    return posts
}

async function getComments(postID, limit) {
    const response = await fetch(`${BASE_URL}/comments?postId=${postID}`)
    const data = await response.json()
    const comments = data.slice(0, limit)
    return comments
}

(async function (){
    const user = await getUser(1)
    const posts = await getPosts(user.id, 3)
    for (let post of posts) {
        const comments = await getComments(post.id)
        console.log(comments)
    }
})()
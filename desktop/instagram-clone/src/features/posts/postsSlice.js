import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        image: `https://picsum.photos/id/123/500/500`,
        description: "Post 1 description",
        date: new Date().toISOString(),
        likes: 15,
        comments: [],
    },
    {
        id: 2,
        image: `https://picsum.photos/id/124/500/500`,
        description: "Post 2 description",
        date: new Date().toISOString(),
        likes: 30,
        comments: [],
    },
    {
        id: 3,
        image: `https://picsum.photos/id/125/500/500`,
        description: "Post 3 description",
        date: new Date().toISOString(),
        likes: 20,
        comments: [],
    },
    {
        id: 4,
        image: `https://picsum.photos/id/126/500/500`,
        description: "Post 4 description",
        date: new Date().toISOString(),
        likes: 25,
        comments: [],
    },
    {
        id: 5,
        image: `https://picsum.photos/id/127/500/500`,
        description: "Post 5 description",
        date: new Date().toISOString(),
        likes: 18,
        comments: [],
    },
    {
        id: 6,
        image: `https://picsum.photos/id/128/500/500`,
        description: "Post 6 description",
        date: new Date().toISOString(),
        likes: 22,
        comments: [],
    },
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        createPost: (state, action) => {
            const newPost = {
                id: Date.now(),
                image: action.payload.image,
                description: action.payload.description,
                date: new Date().toISOString(),
                likes: 0,
                comments: 0,
            };
            state.push(newPost);
        },
        updatePost: (state, action) => {
            const index = state.findIndex((post) => post.id === action.payload.id);
            state[index] = action.payload;
        },
        deletePost: (state, action) => {
            const postId = action.payload;
            return state.filter(post => post.id !== postId);
        },
        addCommentToPost: (state, action) => {
            const { postId, comment } = action.payload;

            // Find the post by postId
            const post = state.find((post) => post.id === postId);

            if (post) {
                // Create a new post object with the comment added
                const updatedPost = {
                    ...post,
                    comments: [...post.comments, comment],
                };

                // Replace the old post with the updated one in the state
                state[state.indexOf(post)] = updatedPost;
            }
        },
    },
});

export const { createPost, updatePost, deletePost, addCommentToPost } = postsSlice.actions;

export default postsSlice.reducer;
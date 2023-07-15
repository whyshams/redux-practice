import { createSlice } from "@reduxjs/toolkit";

const initialState = [ {
    id :"1", title : "This is post number 1....", content: "This is the Content of post number one..."
},{
    id :"2", title : "This is post number 2....", content: "This is the Content of post number two..."
},{
    id :"3", title : "This is post number 3....", content: "This is the Content of post number two..."
},
]

const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers:{
        addPost:(state,action) => {
            state.push(action.payload)
        },
    },
})

export const selectAllPosts = (state) => state.posts;

export const {addPost} = postsSlice.actions;

export default postsSlice.reducer;
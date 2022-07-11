import allPostsData from "../../data/data"; 
// import { createSlice } from "@reduxjs/toolkit";


export const loadData = () => {
    return {
      type: 'posts/loadPosts',
      payload: allPostsData
    }
  }
  
  const initialState = [];
  const allPostsReducer = (allPostA = initialState, action) => {
    switch (action.type) {
      case 'posts/loadPosts':
        return action.payload;
        default:
            return allPostA;

    }
}

export const selectAllPosts = (state) => state.allPosts;

export default allPostsReducer;

// export const postsSlice = createSlice({
//     name: 'posts',
//     initialState: [],
//     reducers: {
//         loadPosts: (state, action) => {
//          return [...state, action.payload]
//         }
//     }
// });




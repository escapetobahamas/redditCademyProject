// import allPostsData from "../../data/data"; 
 import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';



// export const loadData = () => {
//     return {
//       type: 'posts/loadPosts',
//       payload: allPostsData
//     }
//   }
  
//   const initialState = [];
//   const allPostsReducer = (allPostA = initialState, action) => {
//     switch (action.type) {
//       case 'posts/loadPosts':
//         return action.payload;
//         default:
//             return allPostA;

//     }
// }

// export const selectAllPosts = (state) => state.allPosts;

// export default allPostsReducer;
const API_ROOT = 'https://www.reddit.com';

export const loadPosts = createAsyncThunk(
  'posts/loadPosts',
  async(subreddit) => {
    const response = await fetch(`${API_ROOT}${subreddit}.json`);
    const json = await response.json();
  //  console.log(json);
    const postData = json.data.children.map((post)=> {
      const { subreddit_name_prefixed, author, num_comments, title, id, ups } = post.data;
      let img = post.data.url;
      return {
        author,
        subreddit: subreddit_name_prefixed,
        title: title,
        num_comments,
        image: img,
        id,
        ups
      }
    })

    return postData;
  }
);
 


const initialSatate = {
  posts: [],
  hasError: false,
  isLoading: false,
  searchTerm: '',
  selectedSubreddit: '/r/pics/'

}

export const postsSlice = createSlice({
    name: 'posts',
    initialState: initialSatate,
    reducers: {
        // loadPosts: (state, action) => {
        //  return [...state, action.payload]
        // }
        setSubreddit:(state, action) => {
         
            state.selectedSubreddit = action.payload;
         
        }
    },
    extraReducers: {
      [loadPosts.pending]: (state, action) =>{
        state.isLoading = true;
        state.hasError = false;
      },
      [loadPosts.fulfilled]: (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
        state.hasError = false;
      },
      [loadPosts.rejected]: (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      }
    }
});



// export fetchPosts = (subreddit) => async(dispatch) => {
//   try {
//     dispatch(s)
//   }
// }







export const selectAllPosts = (state) => state.allPosts.posts;
export const { setSubreddit } = postsSlice.actions;
export default postsSlice.reducer;


import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import allPostsReducer from '../features/posts/postsSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    allPosts: allPostsReducer,
  },
});

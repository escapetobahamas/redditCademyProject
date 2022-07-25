import {Tile} from '../../components/postTile.js';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPosts, postsSlice, loadPosts } from './postsSlice.js';

export const Posts = () => {
    const dispatch = useDispatch();
    const allPostsS = useSelector(selectAllPosts);
    const allPosts = useSelector((state)=> state.allPosts);
    const { isLoading, hasError,selectedSubreddit } = allPosts;
    useEffect(() => {
        dispatch(loadPosts(selectedSubreddit))},[dispatch]
        );

console.log(hasError);
console.log(allPostsS);
    

if (isLoading) {
    return <p>Loadin...</p>
}
    return (
        <div>
                {allPostsS.map((post) =>(
                    <Tile key = {post.id} content = {post} />
                )  )}
            
        </div>
    )
}
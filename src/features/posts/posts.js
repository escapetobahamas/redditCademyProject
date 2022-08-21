import {Tile} from '../../components/postTile.js';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPosts, postsSlice, loadPosts } from './postsSlice.js';
import './stylePost.css';

export const Posts = () => {
    const dispatch = useDispatch();
    // const allPostsS = useSelector(selectAllPosts);
    const allPosts = useSelector((state)=> state.allPosts);
    const { isLoading, hasError,selectedSubreddit } = allPosts;
    
    useEffect(() => {
        dispatch(loadPosts(selectedSubreddit))},[selectedSubreddit]
        );

// console.log(hasError);
// console.log(allPostsS);
// console.log(isLoading);
// console.log(allPosts.posts.data);

// if (isLoading) {
//     return <p>Loadin...</p>
// }
    return (
        <div>
            {allPosts.posts.map((post, index) => {
                return <Tile key = {index} content = {post} className = "post">
                    {post.title}
                    
                    <button className='voteUp' type = 'button'>
                                Up
                    </button>
                    <p>
                        {post.ups}
                    </p>
                    <button className = 'voteDown' type = 'button'>
                                    Down
                    </button>
                    <img src = {post.image} alt = 'img' />
                     <span className='postComments'>
                        <button type = 'button'>
                            Comments
                        </button>
                        {post.num_comments}
                     </span>
                </Tile>
                
            })}
        </div>
    )




//     return (
//         <div>
//                 {Object.keys(allPostsS).map((post, index) =>(
//                     <Tile key = {index} content = {post} />
//                 )  )}
            
//         </div>
//     )
}
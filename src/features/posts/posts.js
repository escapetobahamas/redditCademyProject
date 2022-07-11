import {Tile} from '../../components/postTile.js';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadData, selectAllPosts } from './postsSlice.js';

export const Posts = () => {
    const dispatch = useDispatch();
    const allPostss = useSelector(selectAllPosts);

  const  onFirstRender = () => {
        dispatch(loadData())
    }

    useEffect(onFirstRender);


    return (
        <div>
                {allPostss.map((post) =>(
                    <Tile key = {post.id} content = {post} />
                )  )}
            
        </div>
    )
}
import React, { useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tile } from '../../components/postTile.js';
import { selectSubreddits, loadSubreddits } from "./subredditSlice";

export const Subreddits = () => {
    const dispatch = useDispatch();
    const allSubreddits = useSelector((state) => state.subreddits);
    const { subreddits } = allSubreddits;

    useEffect(()=> {
        dispatch(loadSubreddits());
    },[dispatch])

// subreddit uses tile component to render list of subreddits

    return (
        <div>
            {subreddits.map((subreddit, index)=> {
                return <Tile key = {index} content = {subreddit} name = "subreddit" />
                
            })}
            
        </div>
    )
}
import React from "react";

// Tile is universal component. It can be used to display posts as well as display Reddits

export const Tile = ({content}) => {
    // console.log(content);
    return (
        <div  className = 'posts' tabIndex = {0}>
           
                    <div>
                        
                         <h3 className="postName">{content.title}</h3>
                         <h4 className="author">{content.author}</h4>
                        <div className="imgContainer">
                            <img src = {content.image} className = 'postImage' alt = {content.name}/>
                          
                        </div> 
                    </div>
               
            
        </div>
    )
}
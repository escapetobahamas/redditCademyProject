import React from "react";



export const Tile = ({content, children}) => {
    return (
        <div key = {content.id} className = 'post' tabIndex = {0}>
            <h3 className="postName">{content.name}</h3>
            <div className="imgContainer">
                <img src = {content.img} className = 'postImage' alt = {content.name}/>
            </div>
            {children}
        </div>
    )
}
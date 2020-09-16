import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    
    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} title={title} alt=""/>
            <p>{title}</p>
        </div>
    )
}

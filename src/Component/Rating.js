import React from 'react';




const Rating = ({count, handleChangeRating}) => {
    let stars = []
    for(let i = 0; i < 5; i++) {
        
        if(i < count) {
            stars.push(<span onClick={() => handleChangeRating(i+1) }>★</span>)
        }
        else {
            stars.push(<span onClick={() => handleChangeRating(i+1) }>☆</span>)
        }
    }
    return (
        <span> {stars} </span>
    )
}

export default Rating;
    
import React from 'react';
import Rating from './Rating';


const RatingFilter = ({onChange, count}) => (

    <div className="rating-filter">

        <span className=" "><strong> Minimum rating </strong></span>
        
        <Rating 
            count={count}
            onChangeRating={(newRating) =>{
                onChange(newRating)
            }} />

      </div>
)

export default RatingFilter
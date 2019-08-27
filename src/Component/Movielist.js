import React from 'react';
 import Rating from './Rating';
 import { directive } from '@babel/types';
 import ModalExample from './ModalExample';
 import IsLoading from './IsLoading';


const MovieList = (props,) => {
    console.log(props.movies)

    return (<div className="movies-list">

       {props.movies.filter(el => el.title.includes(props.searchTitle.toLowerCase().trim())&& el.rating >= props.rating)
       .map((el,i)=>{
       return( 

        <div className="movie-card">
            <Rating  count={el.rating} handleChangeRating={ () => {}} />
            <img className="movie-image"src={el.image} />
            <h6 className="movie-title"> {el.title}  </h6>
        </div> 
    )
       })} 
        

        </div>)
    
}
export default MovieList;

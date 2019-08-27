
import React, {Component} from "react";
import './App.css';
import NameFilter from './Component/NameFilter';
import MovieList from './Component/Movielist';
import Rating from './Component/Rating';
import ModalExample from './Component/ModalExample';





class MovieApp extends Component {
    constructor(props) {
      super(props)
      this.state = {
        minRatingFilter: 3,

        movies: [ 
          {image:"https://vignette.wikia.nocookie.net/marvelstudios/images/6/65/Avengers-infinity-war-affiche-poster-hd.jpg/revision/latest?cb=20180317131550&path-prefix=fr",
          rating:3,
          title:"Avengers"},
        
          {image:"http://fr.web.img6.acsta.net/pictures/18/12/13/12/12/2738771.jpg",
          rating:5,
          title:"Aquaman"},
          
          {image:"https://i.pinimg.com/originals/e0/f0/d6/e0f0d63842b412cf315428cac292005c.jpg",
          rating:2,
          title:"Rachel"}
        ],

        filtredTitle:'',
        rating: 1,
      }
    }

  
  filtredMovies =(event) =>{
   this.setState({
     filtredTitle : event.target.value
   })
  }

  handleChangeRating =(rate) =>{
    this.setState({
      rating: rate
    })
  }

  addnewmovie=(title,rating)=>{
    this.setState({
      movies:this.state.movies.concat({title:title,rating:rating})
    })
  }
render() {

  return (

 <div className="App">

    <header className="App-header">

      <NameFilter  value={this.state.filtredTitle} 
       onChange={this.filtredMovies} />
       

  <div id='movie-rating'>
      <Rating  count={this.state.rating} handleChangeRating={this.handleChangeRating} /></div>
    </header>
    
    <main>
        <MovieList movies={this.state.movies} searchTitle={this.state.filtredTitle} rating={this.state.rating}
        />
        <ModalExample add={this.addnewmovie}/>
    </main>

</div>
  );
}
  }

export default MovieApp;






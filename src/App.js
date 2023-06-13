import React from "react";
import "./App.css";

import MovieList from "./MovieList";
import Navbar from "./Navbar";
import Navbar1 from "./Navbar1";
import { movies } from "./movies.data";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount:0,
  }
  }
  handleIncStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    if (movies[mid].star >= 10) {
      return;
    }

    movies[mid].star += 0.5;
    this.setState({
      movies: movies,
    });
  };

  handleDecStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].star <= 0) {
      return;
    }
    movies[mid].star -= 0.5;
    this.setState({
      movies: movies,
    });
  };

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies: movies,
    });
  };

  handleAddtocart = (mov) => {
    const { movies } = this.state;
    let{cartCount} = this.state;
    const mid = movies.indexOf(mov);
    movies[mid].isInCart = !movies[mid].isInCart;
     
    if(movies[mid].isInCart){
      cartCount = cartCount+1
    }else{
      cartCount = cartCount-1
    }

    this.setState({
      movies: movies,
      cartCount: cartCount
    });
   
  };

  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount = {cartCount}/>
        <MovieList movies={movies}
                   addStars ={this.handleIncStar}
                   decStars = {this.handleDecStar}
                   toggleFav = {this.handleToggleFav}
                   toggleCart = {this.handleAddtocart} 
                   
                   />
        {/* <Navbar1/> */}
      </>
    );
  }
}

export default App;

import React from "react";
import MovieCard from "./Moviecard";

class MovieList extends React.Component {
  

  render() {
    const { movies, addStars,decStars,toggleFav,toggleCart } = this.props;

    return (
      <>
        {movies.map((movie, index) => (
          <MovieCard
            movies={movie}
            key={movie.id}
            addStars={addStars}
            decStars={decStars}
            onClickFav={toggleFav}
            onClickAddtocart={toggleCart}
          />
        ))}
      </>
    );
  }
}

export default MovieList;

import MovieCard from "./Moviecard";

function MovieList(props) {
  
    const { movies, addStars,decStars,toggleFav,toggleCart } = props;

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

export default MovieList;

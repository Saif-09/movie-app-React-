import React from "react";

class MovieCard extends React.Component {
  render() {
    console.log(this.props);
    const { movies, addStars, decStars, onClickFav, onClickAddtocart } =
      this.props;
    const { title, plot, price, rating, star, fav, isInCart } =
      this.props.movies;
    return (
      <div className="main">
        {/**Movie Card */}
        <div className="movie-card">
          {/**Left section of Movie Card */}
          <div className="left">
            <img
              alt="poster"
              src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
            />
          </div>

          {/**Right section Movie Card */}
          <div className="right">
            {/**Title, plot, price of the movie */}
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs. {price}</div>

            {/**Footer starts here with ratings, stars and buttons */}
            <div className="footer">
              <div className="rating">{rating}</div>

              {/**Star image with increase and decrease buttons and star count */}
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="Decrease"
                  src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                  onClick={() => {
                    decStars(movies);
                  }}
                />
                <img
                  className="stars"
                  alt="stars"
                  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                />
                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                  onClick={() => {
                    addStars(movies);
                  }}
                />
                <span className="starCount">{star}</span>
              </div>

              {/**Favourite and add to cart buttons */}
              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={() => onClickFav(movies)}
              >
                {fav ? "Un-favourite" : "Favourite"}
              </button>

              <button
                className={isInCart ? "rem-cart-btn" : "cart-btn"}
                onClick={() => onClickAddtocart(movies)}
              >
                {isInCart ? "Remove from cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;

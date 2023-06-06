import React from "react";

class MovieCard extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "The Avengers",
//       plot: "Supernatural powers shown in the movie",
//       price: 199,
//       rating: 8.9,
//       stars: 0,
//       fav:false,
//       cart: false,
//     };
//     this.addStars = this.addStars.bind(this);
//   }
  //we can use arrow function to by default bind it
  addStars = () => {
    //form 1
    if (this.state.stars >= 10) {
      return;
    }
    this.setState({
      stars: this.state.stars + 0.5,
    });

    //Second Form

    // this.setState((prevState)=>{
    //     return{
    //         stars:prevState.stars+0.5

    //     }
    // })

    // this.state.stars +=0.5;
    // console.log("this.state.stars", this.state.stars);
  };

  decStars = () => {
    if (this.state.stars <= 0) {
      return;
    }

    this.setState((prevState) => {
      return {
        stars: prevState.stars - 0.5,
      };
    });
  };

  handleFav=()=>{
    this.setState({
        fav: !this.state.fav
    })

  }

  handleCart=()=>{
    this.setState({
        cart: !this.state.cart
        })
  }

  render() {
    const { title, plot, price, rating, stars } = this.props;
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
                  onClick={this.decStars}
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
                  onClick={this.addStars}
                />
                <span className="starCount">{stars}</span>
              </div>

              {/**Favourite and add to cart buttons */}
              {this.props.fav? <button className="unfavourite-btn" onClick={this.handleFav}>Unlike</button> : <button className="favourite-btn" onClick={this.handleFav}>Like</button> }
              
              {this.props.cart? <button className="rem-cart-btn" onClick={this.handleCart}>Remove</button> : <button className="cart-btn" onClick={this.handleCart}>Add to Cart</button> }
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;

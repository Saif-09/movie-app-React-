import React from "react";

class MovieCard extends React.Component{
    render(){
        return(
            <div className="main">
                <div className="movie-card"></div>
                <div className="left">
                    <img alt="Poster"/>
                </div>
                <div className="right">
                    <div className="title">The adventures</div>
                    <div className="plot">Plot of the movie will be here</div>
                    <div className="price">Rs.299</div>

                    <div className="footer">
                        <div className="star-rating">8.9</div>
                        <div className="stars">star</div>
                        <button className="favourite">Favorite</button>
                        <button className="cart-btn">Add to cart</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default MovieCard;
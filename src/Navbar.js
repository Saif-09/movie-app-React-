import React from "react";

class Navbar extends React.Component{
    render(){
        return(
            <>
            <div className="nav">
                <div className="title">Movie-App</div>
                <div className="cart">
                    <img alt="Cart Item"/>
                    <span>0</span>
                </div>
            </div>
            </>
        )
    }
}

export default Navbar;
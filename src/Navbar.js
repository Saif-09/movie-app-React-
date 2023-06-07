import React from "react";

class Navbar extends React.Component{
    render(){
        return(
            <>
            <div style={{width:"100%" , height:70 , background:"aqua" , display: "flex", justifyContent: "space-between"}}>
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

// width: 100%;
//   height: 70px;
//   background-color: aqua;
//   display: flex;
//   justify-content: space-between;
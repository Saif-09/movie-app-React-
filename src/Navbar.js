import React from "react";
import styled from "styled-components";

//This is react library -styled components is used
const Nav = styled.div`
  width: 100%;
  height: 70px;
  background-color: #4267b2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: Monsterrat, sans-serif;
  text-transform: uppercase;
  margin-left: 20px;
  &:hover {
    color: red;
  } //like this we can use pseudo classes
`;

const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartIcon = styled.img`
  height: 48px;
  margin-right: 20px;
`;

const CartCount = styled.span`
  background: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  display: ${(props) => (props.show ? "" : "none")};
`;

function Navbar(props)  {
  
    const {cartCount} = props;
    return (
      <>
        <Nav>
          <Title>Movie-App</Title>
          <CartContainer>
            <CartIcon
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
              alt="Cart Item"
            />
            <CartCount color="red" show={true}>
              {cartCount}
            </CartCount>
          </CartContainer>
        </Nav>
      </>
    );
  
}

export default Navbar;

// width: 100%;
//   height: 70px;
//   background-color: aqua;
//   display: flex;
//   justify-content: space-between;

//This is one of the way to use CSS (internal css)

// const styles = {
//     nav: {
//         height:70,
//         background:"#4267b2",
//         display:"flex",
//         justifyContent:"space-between",
//         alignItems:"center",
//         position:"relative"
//     },
//     title: {
//         fontSize: 30,
//         color: "#fff",
//         fontWeight:600,
//         fontfamily: '"Monsterrat",sans-serif',
//         textTransform: "uppercase",
//         marginLeft:20

//     },
//     cartContainer: {
//         position: "relative",
//         cursor:"pointer",

//     },
//     cartIcon:{
//         height:48,
//         marginRight:20
//     },
//     cartCount:{
//         background:"orange",
//         borderRadius:"50%",
//         padding: "4px 8px",
//         position: "absolute",
//         right:10,
//         top:-5,
//         fontSize:12
//     }

// }

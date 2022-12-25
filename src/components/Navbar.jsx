import { Badge } from "@material-ui/core";
import {  ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-top: -10px;


`;





const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 35px;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          
          
        <Link to="/" style={{ textDecoration: "none",color:"black"}}>  <Logo>iShop</Logo></Link>
        </Left>
        
        <Right>
          <Link style={{ textDecoration: "none",color:"black"}} to="/"><MenuItem>HOME</MenuItem></Link>
          <Link style={{ textDecoration: "none",color:"black"}} to="/men"><MenuItem>MEN</MenuItem></Link>
          <Link style={{ textDecoration: "none",color:"black"}} to="/women"><MenuItem>WOMEN</MenuItem></Link>
          <Link style={{ textDecoration: "none",color:"black"}} to="/edivice"><MenuItem>E-DIVICE</MenuItem></Link>
          <Link style={{ textDecoration: "none",color:"black"}} to="/register"><MenuItem>SIGN UP</MenuItem></Link>
          <Link style={{ textDecoration: "none",color:"black"}} to="/login"><MenuItem>SIGN IN</MenuItem></Link>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

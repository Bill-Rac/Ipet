import React, { useEffect, useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { BsSearch, BsPersonCircle, BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import SignIn from "../Login/SignIn";
import { CartContext } from "../Cart/ShoppingCartContext";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    "http://localhost:3000";
    setShowLoginModal(false);
  };

  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      <MainHeader>
        <HeaderContent>
          <Left>
            <LeftItem to="/">HOME</LeftItem>
            <LeftItem>ABOUT</LeftItem>
            <LeftItem>CATEGORIES</LeftItem>
          </Left>
          <Center>
            <BsSearch onClick={() => setShowSearch(true)} />
          </Center>
          <Right>
            <CartIcon onClick={() => setShowCart(true)}>
              <BsCart3 />
              <CartIconCount>{quantity}</CartIconCount>
            </CartIcon>
            <BsPersonCircle onClick={handleOpenLoginModal} />
          </Right>
        </HeaderContent>
      </MainHeader>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
      {showLoginModal && <SignIn onClose={handleCloseLoginModal} />}
    </>
  );
};

export default Header;

const fadeIn = keyframes`
    0% {transform: translateY(-80px);}
    100% {transform: translateY(0);}
  `;

const MainHeader = styled.header`
  width: 100%;
  padding: 0 20px;
  background-color: #7209b7;
  color: white;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
  z-index: 99;

  @media (min-width: 768px) {
    padding: 0 40px;
  }

  &.sticky-header {
    position: sticky;
    top: 0;
    transform: translateY(-80px);
    animation: ${fadeIn} 0.3s ease forwards;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    height: 80px;
  }
`;

const Left = styled.ul`
  list-style-type: none;
  display: none;
  gap: 25px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const LeftItem = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;

const Center = styled.h1`
  font-size: 20px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 24px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const CartIcon = styled.div`
  position: relative;

  svg {
    font-size: 20px;
    cursor: pointer;
    border-radius: 10%;

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  span {
    min-width: 20px;
    text-align: center;
    background-color: #f94144;
    padding: 2.5px;
    position: absolute;
    top: -5px;
    right: -12px;
    font-size: 12px;
    line-height: 1;
    border-radius: 10px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 25px;
  }

  svg {
    font-size: 20px;
    cursor: pointer;
    border-radius: 10%;

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  ${CartIcon} {
    position: relative;
  }
`;

const CartIconCount = styled.span`
  min-width: 20px;
  text-align: center;
  background-color: #8e2de2;
  padding: 2.5px;
  position: absolute;
  top: -5px;
  right: -12px;
  font-size: 12px;
  line-height: 1;
  border-radius: 10px;
`;

import React from "react";
import { useEffect, useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { BsSearch, BsPersonCircle, BsCart3 } from "react-icons/bs";
import Search from "./Search/Search";
// import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
// import { Context } from "../../utils/context";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("Scroll", handleScroll);
  }, []);

  return (
    <>
      <MainHeader scrolled={scrolled ? "stickyHead" : ""}>
        <HeaderContent>
          <Left>
            <LeftItem>HOME</LeftItem>
            <LeftItem>ABOUT</LeftItem>
            <LeftItem>CATEGORIES</LeftItem>
          </Left>
          <Center>
            <BsSearch onClick={() => setShowSearch(true)}/>
          </Center>
          <Right>
            <CartIcon onClick={() => setShowCart(true)}>
              <BsCart3 />
              <CartIconCount>3</CartIconCount>
            </CartIcon>
            <BsPersonCircle />
          </Right>
        </HeaderContent>
      </MainHeader>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
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
  background-color: #603e85;
  color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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

const LeftItem = styled.li`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
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

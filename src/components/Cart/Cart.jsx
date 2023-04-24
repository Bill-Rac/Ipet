import React from "react";
import styled from "styled-components";
import { BsFillXCircleFill, BsCartX } from "react-icons/bs";

const Cart = () => {
  return <CartPanel>
    <OpacLayer></OpacLayer>
    <CartContent></CartContent>
  </CartPanel>;
};

export default Cart;

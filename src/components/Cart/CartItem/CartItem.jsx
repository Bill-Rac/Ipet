import React from "react";
import { BsX } from "react-icons/bs";
import styled from "styled-components";
import prod from "../../../assets/products/prod1.webp";

const CartItem = () => {
  return (
    <CartProducts>
      <CartProduct>
        <ImgContainer>
          <img src={prod} />
        </ImgContainer>

        <ProdDetails>
          <Name>Product name</Name>
          <BsX CloseBtn />

          <QuantityButtons>
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </QuantityButtons>

          <Text>
            <span>3</span>
            <span>x</span>
            <HighLight>$ 43323</HighLight>
          </Text>
        </ProdDetails>
        
      </CartProduct>
    </CartProducts>
  );
};

export default CartItem;

const CartProducts = styled.div`
  flex-grow: 1;
`;

const CartProduct = styled.div`
  padding: 20px 15px;
  display: flex;
  gap: 10px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const ImgContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  width: 60px;
  height: 60px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ProdDetails = styled.div`
  overflow: hidden;
  position: relative;

  svg {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;

const Name = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 16px;
  line-height: 1;
  margin-bottom: 10px;
  font-weight: 600;
  display: block;
  padding-right: 25px;
`;

const CloseBtn = styled.svg``;

const QuantityButtons = styled.div`
  width: fit-content;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 30px;
  margin-bottom: 8px;

  span {
    font-size: 14px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #6b6b6b;

    &:nth-child(1) {
      font-size: 18px;
      border-right: 1px solid rgba(0, 0, 0, 0.2);
    }
    &:nth-child(2) {
      width: 40px;
    }
    &:nth-child(3) {
      border-left: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 600;
`;

const HighLight = styled.span`
  color: #8e2de2;
`;

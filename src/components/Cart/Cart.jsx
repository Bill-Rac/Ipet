import React from "react";
import styled, { keyframes } from "styled-components";
import { BsX, BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";

const Cart = ({ setShowCart }) => {
  return (
    <CartPanel>
      <OpacLayer></OpacLayer>
      <CartContent>
        <CartHeader>
          <Heading>Shopping Cart</Heading>
          <CloseBtn onClick={() => setShowCart(false)}>
            <BsX />
            <Text>Close</Text>
          </CloseBtn>
        </CartHeader>

        {/* <EmptyCart>
          <BsCartX />
          <span>You haven't added anything to your cart yet</span>
          <ReturnCta>START SHOPPING</ReturnCta>
        </EmptyCart> */}

        <>
          <CartItem />

          <CartFooter>
            <Subtotal>
              <span>Total:</span>
              <TextTotal>$1234</TextTotal>
            </Subtotal>

            <Button>
              <CheckoutCta>CHECKOUT</CheckoutCta>
            </Button>
          </CartFooter>
        </>
      </CartContent>
    </CartPanel>
  );
};

export default Cart;

const slideCartWindow = keyframes`
  0% {transform: translateX(100%);}
  100% {transform: translateX(0);}
`;

const CartPanel = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 99;
`;

const OpacLayer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CartContent = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  animation: ${slideCartWindow} 0.3s ease forwards;

  @media (min-width: 768px) {
    width: 340px;
  }
`;

const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Heading = styled.span`
  flex-grow: 1;
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

const CloseBtn = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  svg {
    font-size: 18px;
  }

  &:hover {
    opacity: 0.5;
  }
`;

const Text = styled.span`
  text-transform: uppercase;
  font-size: 14px;
`;

// const EmptyCart = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;
//   margin-top: 100px;

//   svg {
//     font-size: 120px;
//     opacity: 0.1;
//     color: rgba(67, 23, 109, 0.5);
//   }
// `;

const ReturnCta = styled.button`
  outline: 0;
  border: 0;
  height: 40px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  color: white;
  background: #653f90;
  border-radius: 5px;
`;

const CartFooter = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const Subtotal = styled.div`
  padding: 20px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;

  span {
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const TextTotal = styled.span`
  color: #8e2de2;
`;

const Button = styled.div`
  padding: 20px 15px;
`;

const CheckoutCta = styled.button`
  outline: 0;
  border: 0;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background: #653f90;
  border-radius: 5px;
  font-weight: 700;
`;

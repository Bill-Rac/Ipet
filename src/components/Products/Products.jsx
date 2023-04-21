import React from "react";
import styled from "styled-components";
import Product from "./Product/Product";

const Products = ({ innerPage }) => {
  return (
    <ProductsContainer>
      {!innerPage && <SecHeading>POPULAR DEALS FOR IPET</SecHeading>}
      <Productos>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Productos>
    </ProductsContainer>
  );
};

export default Products;

const ProductsContainer = styled.div`
  margin: 50px 0;

  @media screen and (min-width: 768px) {
    margin: 75px 0;
  }
`;

const SecHeading = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-bottom: 35px;
    font-size: 24px;
  }
  &:after {
    content: "";
    display: block;
    margin-top: 5px;
    width: 50px;
    height: 3px;
    background-color: #8e2de2;

    @media screen and (min-width: 768px) {
      margin-top: 10px;
    }
  }
`;

const Productos = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

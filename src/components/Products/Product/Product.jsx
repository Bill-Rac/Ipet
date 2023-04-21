import React from "react";
import styled from "styled-components";
import prod from "../../../assets/products/earbuds-prod-1.webp";

const Product = () => {
  return (
    <ProductCard>
      <Thumbnail>
        <img src={prod} />
      </Thumbnail>
      <ProdDetails>
        <Name>Product Name</Name>
        <Price>$99</Price>
      </ProdDetails>
    </ProductCard>
  );
};

export default Product;

const Thumbnail = styled.div`
  width: 100%;
  height: 180px;
  background-color: rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;
  padding: 25px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 350px;
  }

  img {
    transition: all ease 0.3s;
    display: block;
    width: 100%;
  }
`;

const ProductCard = styled.div`
  width: calc(50% - 5px);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: calc(25% - 15px);
  }

  &:hover {
    ${Thumbnail} {
      img {
        transform: scale(1.2);
      }
    }
  }
`;

const ProdDetails = styled.div``;

const Name = styled.span`
  font-size: 14px;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;
const Price = styled.span`
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

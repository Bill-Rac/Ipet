import React, { useEffect } from "react";
import styled from "styled-components";
import { useFetch } from "../../../useFetch";
import { Link } from "react-router-dom";

const Product = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/products");
  if (loading) return <li>Loading...</li>;
  if (error) return <li>Error: {error}</li>;

  return data?.map((product) => (
    <StyledLink to={`/product/${product._id}`} key={product.id}>
      <ProductCard>
        <Thumbnail>
          <img src={product.image} alt={product.name} />
        </Thumbnail>
        <ProdDetails>
          <Name>{product.name}</Name>
          <Price>{product.price}</Price>
        </ProdDetails>
      </ProductCard>
    </StyledLink>
  ));
};

export default Product;

const Thumbnail = styled.div`
  width: 10rem;
  height: 10rem;
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ProdDetails = styled.div``;

const Name = styled.span`
  color: #242424;
  font-size: 20px;
  font-weight: bold;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const Price = styled.span`
  color: rgba(172, 0, 0, 1);
  font-weight: 500;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

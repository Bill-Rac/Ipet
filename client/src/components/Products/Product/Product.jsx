import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useFetch } from "../../../useFetch";
import { Link } from "react-router-dom";
import { CartContext } from "../../Cart/ShoppingCartContext";

const Product = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/products");
  if (loading) return <li>Loading...</li>;
  if (error) return <li>Error: {error}</li>;

  const [cart, setCart] = useContext(CartContext);

  const addToCart = (id, price) => {
    setCart((currProducts) => {
      const isProductFound = currProducts.find((product) => product.id === id);
      if (isProductFound) {
        return currProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        return [...currProducts, { id, quantity: 1, price }];
      }
    });
  };

  const removeProduct = (id) => {
    setCart((currProducts) => {
      const foundProduct = currProducts.find((product) => product.id === id);
      if (foundProduct && foundProduct.quantity === 1) {
        return currProducts.filter((product) => product.id !== id);
      } else {
        return currProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      }
    });
  };

  return data?.map((product) => (
    <ProductCard key={product.id}>
      <StyledLink to={`/product/${product._id}`}>
        <Thumbnail>
          <img src={product.image} alt={product.name} />
        </Thumbnail>
        <ProdDetails>
          <Name>{product.name}</Name>
          <Price>{product.price}</Price>
        </ProdDetails>
      </StyledLink>
      <ItemAddButton onClick={() => addToCart(product.id, product.price)}>
        Add To Cart
      </ItemAddButton>
    </ProductCard>
  ));
};

export default Product;

const Thumbnail = styled.div`
  width: 100%;
  height: 10rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 350px;
  }

  img {
    transition: all ease 0.3s;
    display: block;
    width: 10rem;
    object-fit: cover;
  }
`;

const ProductCard = styled.div`
  width: calc(50% - 5px);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  width: 100%;
`;

const ProdDetails = styled.div`
  text-align: center;
`;

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

const ItemAddButton = styled.button`
  background-color: #603e85;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  padding: 10px 20px;
  display: inline-block;
  transition: background-color 0.3s;

  &:hover {
    background-color: white;
    border: 1px solid #603e85;
    color: #653f90;
  }
`;

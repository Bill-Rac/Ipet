import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useFetch } from "../../../useFetch";
import { Link } from "react-router-dom";
import { CartContext } from "../../Cart/ShoppingCartContext";
import { getImageUrl } from "../../Admin/firebase/config";

const Product = () => {
  const { dispatch } = useContext(CartContext);
  const { data, loading, error } = useFetch(`${import.meta.env.VITE_BACKEND_URL}/products`);
  const [imagesUrls, setImagesUrls] = useState({});
  const getImageDownloadUrl = async (id, imageName) => {
    const url = await getImageUrl(imageName)
    setImagesUrls(prevImages => ({
      ...prevImages,
      [id]: url
    }))
    console.log(`For product ${id} and ${imageName}, url is ${url}`)
  }
  useEffect(() => {
    const setImages = async () => {
      await Promise.all(data.map(product => getImageDownloadUrl(product._id, product.image)))
    }
    if (data) { 
      setImages()
    }
  }, [data, loading])
  
  if (loading) return <li>Loading...</li>;
  if (error) return <li>Error: {error}</li>;
  console.log("images", imagesUrls)
  const addToCart = (product) => {
    dispatch({ type: 'new', product })
    // setCart((prevCart) => {
    //   const isProductFound = prevCart.find((item) => item.id === product.id);
    //   if (isProductFound) {
    //     return prevCart.map((item) =>
    //       item.id === product.id
    //         ? { ...item, quantity: item.quantity + 1 }
    //         : item
    //     );
    //   } else {
    //     return [...prevCart, { ...product, quantity: 1 }];
    //   }
    // });
  };

  return data?.map((product) => (
    <ProductCard key={product._id}>
      <StyledLink to={`/product/${product._id}`}>
        <Thumbnail>
          <img src={imagesUrls[product._id]} alt={product.name} />
        </Thumbnail>
        <ProdDetails>
          <Name>{product.name}</Name>
          <Price>{product.price}</Price>
        </ProdDetails>
      </StyledLink>
      <ItemAddButton onClick={() => addToCart(product)}>
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

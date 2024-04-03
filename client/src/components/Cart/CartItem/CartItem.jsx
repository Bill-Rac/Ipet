import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../ShoppingCartContext";
import { BsX } from "react-icons/bs";
import styled from "styled-components";
import { getImageUrl } from "../../Admin/firebase/config";
import { useFetch } from "../../../useFetch";
import { useParams } from "react-router-dom";
// import Product from "../../Products/Product/Product";

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);
  const handleRemove = () => {
    dispatch({ type: "clean", id: item._id });

    // setCart((prevCart) => prevCart.filter((product) => product.id !== item.id));
  };

  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_BACKEND_URL}/products/${item._id}`
  );
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    const setImageDownloadUrl = async () => {
      console.log("url set", data)
      const url = await getImageUrl(data.image);
      setImageUrl(url);
    };
    if (data) {
      setImageDownloadUrl();
    }
  }, [data]);

  const addProduct = () => {
    dispatch({ type: "add", product: item, quantity: 1 });
  };
  if (loading) {
    return null;
  }
  const removeProduct = () => {
    if (item.quantity === 1) {
      handleRemove();
    }
    dispatch({ type: "remove", id: item._id });
  };

  return (
    <CartProducts>
      <CartProduct>
        <ImgContainer>
          <img src={imageUrl} alt={item.name} />
        </ImgContainer>

        <ProdDetails>
          <Name>{item.name}</Name>
          <BsX CloseBtn onClick={handleRemove} />

          <QuantityButtons>
            <span onClick={removeProduct} disabled={item.quantity === 0}>
              -
            </span>
            <span>{item.quantity}</span>
            <span onClick={addProduct}>+</span>
          </QuantityButtons>

          <Text>
            <span>{item.quantity}</span>
            <span>x</span>
            <HighLight>${item.quantity * item.price}</HighLight>
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

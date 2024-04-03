import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useFetch } from "../../useFetch";
import { useParams } from "react-router-dom";
import { CartContext } from "../Cart/ShoppingCartContext";
import { getImageUrl } from "../Admin/firebase/config";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_BACKEND_URL}/products/${id}`
  );
  const [quantity, setQuantity] = useState(0);
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    const setImageDownloadUrl = async () => {
      const url = await getImageUrl(data.image)
      setImageUrl(url);
    }
    if (data) {
      setImageDownloadUrl()
    } 
  }, [data])
  const { shoppingCart, dispatch } = useContext(CartContext);
  if (loading) {
    return null;
  }
  const product = {
    ...data,
    ...shoppingCart.items.find((item) => item._id === id),
  };

  const addProduct = () => {
    dispatch({ type: "add", product, quantity });
  };
  return (
    <SingleProductMainContent>
      <Layout>
        {error && <li>Error: {error}</li>}
        {loading && <li>Loading...</li>}
        <SingleProductPage key={product._id}>
          <Left>
            <img src={imageUrl} />
          </Left>
          <Right>
            <Name>{product.name}</Name>
            <Price>{product.price}</Price>
            <Desc>{product.description}</Desc>

            <CartButtons>
              <QuantityButtons>
                <ButtonRemover
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity === 1}
                >
                  -
                </ButtonRemover>
                <span>{quantity}</span>
                <ButtonRemover onClick={() => setQuantity(quantity + 1)}>
                  +
                </ButtonRemover>
              </QuantityButtons>

              <AddToCartButton onClick={addProduct}>
                <BsFillCartPlusFill size={20} />
                ADD TO CART
              </AddToCartButton>
            </CartButtons>

            <Divider />

            <InfoItem>
              <TextBold>
                Category:
                <span>{product.categories}</span>
              </TextBold>
            </InfoItem>
          </Right>
        </SingleProductPage>
        <RelatedProducts />
      </Layout>
    </SingleProductMainContent>
  );
};

export default SingleProduct;

const SingleProductMainContent = styled.div`
  margin: 0;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
  padding-top: 100px;
`;

const Layout = styled.div`
  max-width: calc(100% - 20px);
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 1200px;
  }
`;

const SingleProductPage = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  flex-shrink: 0;

  @media screen and (min-width: 768px) {
    width: 20rem;
    height: 20rem;
  }
  img {
    width: 15rem;
    display: block;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    padding: 0 35px;
  }
`;

const Name = styled.span`
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const Price = styled.span`
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 20px;
`;

const Desc = styled.span`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 20px;
  color: #6b6b6b;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const CartButtons = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`;

const QuantityButtons = styled.div`
  width: fit-content;
  display: flex;
  border: 2px solid rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  height: 50px;

  span {
    font-size: 18px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #6b6b6b;

    &:nth-child(1) {
      border-right: 2px solid rgba(0, 0, 0, 0.2);
    }
    &:nth-child(2) {
      width: 60px;
    }
    &:nth-child(3) {
      border-left: 2px solid rgba(0, 0, 0, 0.2);
    }
  }
`;

const AddToCartButton = styled.button`
  outline: 0;
  border: 0;
  height: 50px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background: #8e2de2;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    flex-grow: unset;
  }
`;

const Divider = styled.span`
  margin: 20px 0;
  height: 1px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`;

const InfoItem = styled.div``;

const TextBold = styled.span`
  font-size: 18px;
  font-weight: 700;
  display: block;

  &:nth-child(1) {
    margin-bottom: 20px;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    color: #603e85;
  }
`;

const ButtonRemover = styled.button`
  font-size: 18px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #6b6b6b;
`;

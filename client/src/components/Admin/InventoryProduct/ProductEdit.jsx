import React, { useState } from "react";
import Layout from "../Layout";
import { useParams } from "react-router";
import { useEffect } from "react";
import ProductForm from "./ProductForm";
import styled from "styled-components";

const ProductEdit = () => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch( `${import.meta.env.VITE_BACKEND_URL}/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setProductInfo(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Layout>
      <Title>EDIT PRODUCT</Title>
      {productInfo && (
        <ProductForm
          _id={id}
          name={productInfo.name}
          description={productInfo.description}
          price={productInfo.price}
        />
      )}
    </Layout>
  );
};

export default ProductEdit;

const Title = styled.h3`
  color: #8e2de2;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

import React from "react";
import ProductForm from "./ProductForm";
import Layout from "../Layout";
import styled from "styled-components";

const NewProduct = () => {
  return (
    <Layout>
      <Title>NEW PRODUCT</Title>
      <ProductForm />
    </Layout>
  );
};

export default NewProduct;

const Title = styled.h3`
  color: #8e2de2;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

import React from "react";
import Products from "../Products/Products";
import styled from "styled-components";

const Category = () => {
  return (
    <CategoryMainContent>
      <Layout>
        <CategoryTitle>Category Title</CategoryTitle>
        <Products innerPage={true} />
      </Layout>
    </CategoryMainContent>
  );
};

export default Category;

const CategoryMainContent = styled.div`
  margin: 30px 0;

  @media screen and (min-width: 768px) {
    margin: 75px 0;
  }
`;

const Layout = styled.div`
  max-width: calc(100% - 20px);
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 1200px;
  }
`;

const CategoryTitle = styled.div`
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`;

const ProductContainer = styled.div`
  margin: 20px 0;

  @media screen and (min-width: 768px) {
    margin: 50px 0;
  }
`;

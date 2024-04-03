import React from "react";
import Products from "../../Products/Products";
import styled from "styled-components";

const RelatedProducts = () => {
  return (
    <RelatedProduct>
      <Products headingText="Related Products"/>
    </RelatedProduct>
  );
};

export default RelatedProducts;

const RelatedProduct = styled.div``;

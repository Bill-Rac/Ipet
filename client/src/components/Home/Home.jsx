import { useEffect } from "react";
import React from "react";
import Banner from "./Banner/Banner";
import styled from "styled-components";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { Context } from "../../utils/context";
// import { fetchDataFromApi } from "../../utils/api";

const Home = () => {
  // const getCategories = () => {
  //   fetchDataFromApi("/api/categories").then((res) => console.log(res));
  // };

  return (
    <HomeContainer>
      <Banner />

      <MainContent>
        <Layout>
          <Category />
          <Products headingText="Popular deals for Ipet" />
        </Layout>
      </MainContent>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div``;

const MainContent = styled.div`
  max-width: calc(100% - 20px);
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 1200px;
  }
`;

const Layout = styled.div``;

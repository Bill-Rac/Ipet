import React from "react";
import Banner from "./Banner/Banner";
import styled from "styled-components";
import NewsLetter from "../Footer/NewsLetter/NewsLetter";
import Footer from "../Footer/Footer";
import Category from "./Category/Category";
import Products from "../Products/Products";

const Home = () => {
  return (
    <HomeContainer>
      <Banner />

      <MainContent>
        <Layout>
          <Category />
          <Products />
        </Layout>
      </MainContent>

      <NewsLetter />
      <Footer />
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

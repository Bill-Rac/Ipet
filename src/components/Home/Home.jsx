import React from "react";
import Banner from "./Banner/Banner";
import styled from "styled-components";
import NewsLetter from "../Footer/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <HomeContainer>
      <Banner />
      <NewsLetter />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  color: grey;
`;

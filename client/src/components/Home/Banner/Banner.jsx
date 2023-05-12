import React from "react";
import BannerImg from "../../../assets/banner-img2.png";
import styled from "styled-components";

const Banner = () => {
  return (
    <HeroBanner>
      <Content>
        <TextContent>
          <h1>SALES</h1>
          <p>
            Convallis interdum purus adipiscing dis parturient posuere ac a quam
            a eleifend montes parturient posuere curae tempor
          </p>
          <CTAs>
            <BannerCTA>Read More</BannerCTA>
            <BannerCTA className="v2">Shop Now</BannerCTA>
          </CTAs>
        </TextContent>
        <BannerImgEl src={BannerImg} />
      </Content>
    </HeroBanner>
  );
};

export default Banner;

const HeroBanner = styled.div`
  padding: 40px 0;
  position: relative;
  background-image: linear-gradient(to right, #8e2de2, #4a00e0);
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    height: calc(100vh - 80px);
  }
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column-reverse;
  max-width: calc(100% - 20px);
  margin: 0 auto;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 1200px;
  }
`;

const BannerImgEl = styled.img`
  position: relative;
  z-index: 9;
  width: 200px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 500px;
    margin-right: 60px;
    margin-top: 50px;
    margin-bottom: 0;
  }

  @media (min-width: 1200px) {
    width: 600px;
    margin-right: 0;
    margin-top: 0;
  }
`;

const TextContent = styled.div`
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    position: absolute;
    left: 50px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: 1200px) {
    left: 0;
  }

  h1 {
    font-size: 80px;
    font-weight: 700;
    line-height: 1;
    color: white;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      font-size: 180px;
    }
  }

  p {
    max-width: 300px;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      max-width: 500px;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 40px;
    }
  }
`;

const CTAs = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const BannerCTA = styled.div`
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
  width: fit-content;
  border: 2px solid white;
  padding: 10px 20px;
  transition: all ease 0.3s;
  cursor: pointer;
  &.v2 {
    background-color: white;
    color: black;
  }

  &:hover {
    opacity: 0.5;
  }
`;

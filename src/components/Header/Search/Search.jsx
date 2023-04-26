import React from "react";
import { BsX } from "react-icons/bs";
import styled, { keyframes } from "styled-components";
import prod from "../../../assets/products/prod1.webp";

const Search = ({ setShowSearch }) => {
  return (
    <SearchModal>
      <FormField>
        <input type="text" autoFocus placeholder="What does your pet need?" />
        <BsX onClick={() => setShowSearch(false)} />
      </FormField>

      <SearchResultContent>
        <SearchResults>
          <SearchResultItem>
            <ImgContainer>
              <img src={prod} />
            </ImgContainer>

            <ProdDetails>
              <Name>Product name</Name>
              <Desc>Product desc</Desc>
            </ProdDetails>
          </SearchResultItem>
        </SearchResults>
      </SearchResultContent>
    </SearchModal>
  );
};

export default Search;

const slideSearchWindow = keyframes`
    0% {transform: translateY(100%)}
    100% {transform: translateY(0)}
`;

const SearchModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: white;
  transform: translateY(100%);
  animation: ${slideSearchWindow} 0.5s ease forwards;
`;

const FormField = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;

  @media (min-width: 768px) {
    padding: 20px 0;
  }

  input {
    width: 100%;
    max-width: 1200px;
    height: 50px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: #212121;
    outline: none;
    border: none;
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 48px;
      height: 80px;
    }
  }

  svg {
    position: absolute;
    font-size: 25px;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    @media (min-width: 768px) {
      right: 40px;
      font-size: 50px;
    }
  }
`;

const SearchResultContent = styled.div`
  max-width: calc(100% - 20px);
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 800px;
  }
`;

const SearchResults = styled.div`
  height: calc(100vh - 110px);
  overflow: auto;
  margin: 20px 0;

  @media (min-width: 768px) {
    height: calc(100vh - 160px);
  }
`;

const SearchResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
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
`;

const Name = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 16px;
  line-height: 1;
  margin-bottom: 10px;
  font-weight: 600;
  display: block;
`;

const Desc = styled.div`
  font-size: 14px;
  line-height: 1;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.5);
`;

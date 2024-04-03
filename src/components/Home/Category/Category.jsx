import React from "react";
import styled from "styled-components";
import cat1 from "../../../assets/category/cat-1.png";
import cat2 from "../../../assets/category/cat-2.png";
import cat3 from "../../../assets/category/cat-3.png";
import cat4 from "../../../assets/category/cat-4.png";

const Category = () => {
  return (
    <ShopByCategory>
      <Categories>
        <Categorys>
          <img src={cat1} />
        </Categorys>
        <Categorys>
          <img src={cat2} />
        </Categorys>
        <Categorys>
          <img src={cat3} />
        </Categorys>
        <Categorys>
          <img src={cat4} />
        </Categorys>
      </Categories>
    </ShopByCategory>
  );
};

export default Category;

const ShopByCategory = styled.div`
  margin: 25px 0;

  @media screen and (min-width: 768px) {
    margin: 50px 0;
  }
`;

const Categories = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 10px;
`;

const Categorys = styled.div`
  background-color: black;
  width: calc(50% - 5px);
  cursor: pointer;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: calc(25% - 10px);
  }

  img {
    width: 100%;
    display: block;
    transition: all ease 0.3s;
  }

  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`;

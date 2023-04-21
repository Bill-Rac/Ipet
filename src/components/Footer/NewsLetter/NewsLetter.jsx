import React from "react";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import styled from "styled-components";
import newsletterBg from "../../../assets/newsletter-bg.jpeg";

const NewsLetter = () => {
  return (
    <NewsLetterSection>
      <NewsletterContent>
        <SmallText>NewsLetter</SmallText>
        <BigText>Sign up for latest updates and offers</BigText>
        <Form>
          <input type="text" placeholder="Email Address" />
          <Button>Subscribe</Button>
        </Form>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
        <SocialIcons>
          <Icon>
            <BsFacebook size={14} />
          </Icon>
          <Icon>
            <BsInstagram size={14} />
          </Icon>
          <Icon>
            <BsGithub size={14} />
          </Icon>
        </SocialIcons>
      </NewsletterContent>
    </NewsLetterSection>
  );
};

export default NewsLetter;

const NewsLetterSection = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  background: url(${newsletterBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const NewsletterContent = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;
`;

const SmallText = styled.span`
  margin-bottom: 15px;
  text-transform: uppercase;
  color: #333;
`;
const BigText = styled.span`
  margin-bottom: 20px;
  font-size: 22px;
  line-height: 30px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0 30px;
  color: rgba(0, 0, 0, 0.8);
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const Form = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;

  input {
    width: 200px;
    height: 40px;
    border-radius: 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0 12px;
    font-size: 16px;
    outline: none;
    border-radius: 5%;

    @media (min-width: 768px) {
      width: 300px;
    }
  }
`;

const Button = styled.button`
  outline: 0;
  border: 0;
  height: 40px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background: #653f90;
  border-bottom: 3px solid #8e2de2;
  border-radius: 5%;
  @media (min-width: 768px) {
    width: 120px;
  }
`;

const Text = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: rgba(46, 8, 84, 0.5);
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

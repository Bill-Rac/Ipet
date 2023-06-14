import React, { useState } from "react";
import styled from "styled-components";
import { BsX } from "react-icons/bs";

const SignIn = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("register");

  const handleClose = () => {
    onClose();
  };

  const handleRegisterTab = () => {
    setActiveTab("register");
  };

  const handleLoginTab = () => {
    setActiveTab("login");
  };

  return (
    <LoginWrapper>
      <ContentWrapper>
        <TabsWrapper>
          <TabButton
            active={activeTab === "register"}
            onClick={handleRegisterTab}
          >
            Sign Up
          </TabButton>
          <TabButton active={activeTab === "login"} onClick={handleLoginTab}>
            Sign In
          </TabButton>
        </TabsWrapper>
        {activeTab === "register" ? (
          <>
            <TitleWrapper>
              <Title>Register</Title>
              <BsXIcon onClick={handleClose} />
            </TitleWrapper>
            <Input type="email" placeholder="E-mail Address" />
            <Input type="password" placeholder="Password" />
            <Button>Create account</Button>
          </>
        ) : (
          <>
            <TitleWrapper>
              <Title>Login</Title>
              <BsXIcon onClick={handleClose} />
            </TitleWrapper>
            <Input type="email" placeholder="E-mail Address" />
            <Input type="password" placeholder="Password" />
            <Button>Sign In</Button>
          </>
        )}
      </ContentWrapper>
    </LoginWrapper>
  );
};

export default SignIn;

const LoginWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  z-index: 99;
`;

const ContentWrapper = styled.div`
  background-color: #fff;
  width: 400px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const TitleWrapper = styled.div`
  position: relative;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const BsXIcon = styled(BsX)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 25px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: #603e85;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid #603e85;
    color: #653f90;
  }
`;

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

const TabButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: ${(props) => (props.active ? "#653f90" : "black")};
  cursor: pointer;

  @media (max-width: 480px) {
    flex-basis: 50%;
  }
`;

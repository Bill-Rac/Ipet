import React, { useState } from "react";
import styled from "styled-components";
import { BsX } from "react-icons/bs";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./Logout";
import { Profile } from "../Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";

const SignIn = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const { isAuthenticated } = useAuth0();
  return (
    <LoginWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <Title>Iniciar sesion</Title>
          <BsXIcon onClick={handleClose} />
        </TitleWrapper>

        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
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
  font-weight: 300;
  z-index: 99;
`;

const ContentWrapper = styled.div`
  background-color: #fff;
  width: 400px;
  padding: 20px;
  border-radius: 5px;
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

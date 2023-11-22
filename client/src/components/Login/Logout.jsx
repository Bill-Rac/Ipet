import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

export const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </Button>
  );
};

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

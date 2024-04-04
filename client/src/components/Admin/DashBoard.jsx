import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

import Layout from "./Layout";

const DashBoard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) {
    return <Navigate replace to="/" />;
  }
  return (
    <Layout>
      <InformationContainer>
        <Bienvenida>
          Hello, <b>{user.name}</b>
        </Bienvenida>
        <ProfileContainer>
          <ProfileImage src={user.picture} alt={user.name} />
          <ProfileUsername>{user.nickname}</ProfileUsername>
        </ProfileContainer>
      </InformationContainer>
    </Layout>
  );
};

export default DashBoard;

const InformationContainer = styled.div`
  color: #8e2de2;
  display: flex;
  justify-content: space-between;
`;

const Bienvenida = styled.p``;

const ProfileContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  color: black;
  background-color: rgb(181, 152, 201);
  border-radius: 0.5rem;
  overflow: hidden;
`;

const ProfileUsername = styled.span`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const ProfileImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

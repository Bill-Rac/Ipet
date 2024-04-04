import React from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import AdminNav from "./AdminNav";
import { useAuth0 } from "@auth0/auth0-react";

export default function Layout({ children }) {
  const { isAuthenticated, user } = useAuth0();

  if (!isAuthenticated) {
    return <Navigate replace to="/" />;
  }

  if (!user["dev-m1ynq7d6coq7obxp/roles"].includes("Admin")) {
    return <Navigate replace to="/" />;
  }
  return (
    <LogginAnuncement>
      <AdminNav />
      <InformationText>{children}</InformationText>
    </LogginAnuncement>
  );
}
const LogginAnuncement = styled.div`
  background-color: #8e2de2;
  min-height: 100vh;
  display: flex;
`;

const InformationText = styled.div`
  background-color: white;
  flex-grow: 1;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  padding: 1rem;
`;

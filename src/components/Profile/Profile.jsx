import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <ProfileContainer>
        <ProfileImage src={user.picture} alt={user.name} />
        <UserInfo>
          <Name>{user.name}</Name>
          <Email>Email: {user.email}</Email>
        </UserInfo>
      </ProfileContainer>
    )
  );
};
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 2rem;
`;

const ProfileImage = styled.img`
  width: 100px; /* Ajusta el tamaño de la imagen según tus necesidades */
  height: 100px; /* Ajusta el tamaño de la imagen según tus necesidades */
  border-radius: 50%;
  margin-right: 20px; /* Ajusta el espacio entre la imagen y la información */
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2``;
const Email = styled.p``;

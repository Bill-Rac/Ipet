// import React from "react";
// import styled from "styled-components";
// import AdminNav from "./AdminNav";
// import { useAuth0 } from "@auth0/auth0-react";

// const DashBoard = () => {
//   const { user, isAuthenticated } = useAuth0();

//   return (
//     isAuthenticated && (
//       <LogginAnuncement>
//         <AdminNav />
//         <InformationText>
//           Logged in
//           {user.email}
//         </InformationText>
//       </LogginAnuncement>
//     )
//   );
// };

// export default DashBoard;

// const LogginAnuncement = styled.div`
//   background-color: #8e2de2;
//   min-height: 100vh;
//   display: flex;
// `;

// const InformationText = styled.div`
//   background-color: white;
//   flex-grow: 1;
//   margin-top: 0.5rem;
//   margin-right: 0.5rem;
//   margin-bottom: 0.5rem;
//   border-radius: 0.5rem;
//   padding: 1rem;
// `;

import React from "react";
import Layout from "./layout";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const DashBoard = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
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
    )
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

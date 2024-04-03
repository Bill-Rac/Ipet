import React from "react";
import {
  BsFillCursorFill,
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <Title>About</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            sint, esse saepe quae tempora libero animi quos labore eveniet
            deleniti cumque quas earum quis molestiae numquam deserunt vitae
            itaque voluptatem.
          </Text>
        </Column>
        <Column>
          <Title>Contact</Title>
          <ContactItem>
            <BsFillCursorFill />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </ContactItem>
          <ContactItem>
            <BsFillTelephoneFill />
            <Text>123 456 789</Text>
          </ContactItem>
          <ContactItem>
            <BsFillEnvelopeFill />
            <Text>Email: Ipet@ipet.com</Text>
          </ContactItem>
        </Column>
        <Column>
          <Title>Categories</Title>
          <Text>Snacks</Text>
          <Text>Toys</Text>
          <Text>Accesorys</Text>
          <Text>FarmaPet</Text>
          <Text>Hygiene</Text>
          <Text>PetLovers</Text>
        </Column>
        <Column>
          <Title>Pages</Title>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Privacy Policy</Text>
          <Text>Returns</Text>
          <Text>Terms & Conditions</Text>
          <Text>Contact Us</Text>
        </Column>
      </FooterContent>
      <BottomBar>
        <BottomBarContent>
          <Text>
            IPET STORE 2023 CREATED BY BILL, JUAN & CARLOS. E-COMMERCE FOR
            EXOTIC PETS.
          </Text>
        </BottomBarContent>
      </BottomBar>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled.div`
  width: 100%;
`;

const FooterContent = styled.div`
  padding: 50px 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: wrap;
  gap: 20px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    padding: 50px 0;
  }
`;

const Column = styled.div`
  max-width: 300px;

  &:nth-child(3) {
    width: 150px;
    @media screen and (min-width: 768px) {
      width: auto;
    }
  }
`;

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  color: #653f90;

  font-weight: 700;
`;

const Text = styled.div`
  color: rgba(75, 0, 130, 0.5);
  font-size: 14px;
`;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 10px;

  svg {
    flex-shrink: 0;
    font-size: 14px;
    margin-right: 10px;
    margin-top: 4px;
    color: rgba(46, 8, 84, 0.5);
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const BottomBarContent = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 10px;

  @media screen and (min-width: 768px) {
    padding: 0;
    height: 60px;
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

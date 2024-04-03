import React from "react";
import styled from "styled-components";
import { IoStorefront } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

import {
  IoMdHome,
  IoIosSettings,
  IoIosList,
  IoIosArchive,
} from "react-icons/io";

const inactiveLink =
  "display:flex; gap: 0.25rem; padding: 0.25rem; color:white;";
const activeLink =
  inactiveLink +
  "background-color: white; color: #8e2de2; border-top-left-radius: 0.5rem; border-bottom-left-radius: 0.5rem;";

export default function AdminNav() {
  const { pathname } = useLocation();
  const isActive = (path) => (pathname.includes(path) ? true : false);

  return (
    <AsideHeader>
      <AsideIcon>
        <IoStorefront />
        <AsideText>Ipet Admin Interface</AsideText>
      </AsideIcon>

      <Navegation>
        <MenuDashboard
          to={"/admin/dashboard"}
          className={isActive("/dashboard") ? "active" : ""}
        >
          <IoMdHome />
          <Dashboard>Dashboard</Dashboard>
        </MenuDashboard>

        <Menu
          to={"/admin/inventory"}
          className={isActive("inventory") ? "active" : ""}
        >
          <IoIosArchive />
          <Dashboard>Inventory</Dashboard>
        </Menu>

        <Menu
          to={"/admin/orders"}
          className={isActive("orders") ? "active" : ""}
        >
          <IoIosList />
          <Dashboard>Orders</Dashboard>
        </Menu>

        <Menu
          to={"/admin/settings"}
          className={isActive("settings") ? "active" : ""}
        >
          <IoIosSettings />
          <Dashboard>Settings</Dashboard>
        </Menu>
      </Navegation>
    </AsideHeader>
  );
}

const AsideHeader = styled.aside`
  padding: 1rem;
  padding-right: 0;
`;

const AsideIcon = styled.p`
  color: white;
  text-decoration: none;
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  font-weight: bold;
`;

const AsideText = styled.span``;

const MenuDashboard = styled(Link)`
  ${(props) => (props.className === "active" ? activeLink : inactiveLink)};
  gap: 0.25rem;
  display: flex;
  text-decoration: none;
`;

const Menu = styled(Link)`
  ${(props) => (props.className === "active" ? activeLink : inactiveLink)};
  gap: 0.25rem;
  display: flex;
  text-decoration: none;
`;

const Navegation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Dashboard = styled.div``;

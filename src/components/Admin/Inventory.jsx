import React from "react";
import Layout from "./Layout";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useFetch } from "../../useFetch";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";

const Inventory = () => {
  const { data: products } = useFetch(
    `${import.meta.env.VITE_BACKEND_URL}/products`
  );

  return (
    <Layout>
      <AddProducts to={"/admin/inventory/new"}>Add new product</AddProducts>

      <Table>
        <Thead>
          <Tr>
            <Td>Product name</Td>
            <Td></Td>
          </Tr>
        </Thead>
        <tbody>
          {products &&
            products.map((product) => (
              <Tr key={product.id}>
                <Td>{product.name}</Td>
                <Td>
                  <Button to={"/admin/inventory/edit/" + product._id}>
                    <StyledIcon />
                    Edit
                  </Button>
                  <Button to={"/admin/inventory/delete/" + product._id}>
                    <StyledIcon2 />
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
        </tbody>
      </Table>
    </Layout>
  );
};

export default Inventory;

const AddProducts = styled(Link)`
  background-color: #8e2de2;
  color: white;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-decoration: none;
  border-radius: 0.375rem;
`;

const Table = styled.table`
  width: 100%;
  border: 1px solid grey;
  border-spacing: 0;
  margin-top: 0.5rem;
`;

const Thead = styled.thead`
  background-color: #d0b5e8;
`;

const Tr = styled.tr`
  padding: 0.25rem;
`;

const Td = styled.td`
  border: 1px solid #8e2de2;
  border-spacing: 0;
  padding: 0.25rem;
`;

const Button = styled(Link)`
  text-decoration: none;
  background-color: #8e2de2;
  color: white;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.375rem;
  display: inline-flex;
  gap: 0.25rem;
  margin-right: 0.25rem;
`;

const StyledIcon = styled(HiOutlinePencilSquare)`
  width: 1rem;
  height: 1rem;
`;

const StyledIcon2 = styled(HiOutlineTrash)`
  width: 1rem;
  height: 1rem;
`;

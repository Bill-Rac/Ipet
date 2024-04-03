import React from "react";
import Layout from "../Layout";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../../useFetch";

const DeleteProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: productInfo, error } = useFetch(
    `${import.meta.env.VITE_BACKEND_URL}/products/${id}`
  );

  const goBack = () => {
    navigate("/admin/inventory");
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/products/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("Product deleted successfully");
        navigate("/admin/inventory");
      } else {
        console.error("Failed to delete product:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  return (
    <Layout>
      {productInfo && (
        <>
          <Alert>
            Do you really want to delete &quot;{productInfo.name}
            &quot;?
          </Alert>
          <Container>
            <Button onClick={handleDelete}>Yes</Button>
            <Button2 onClick={goBack}>NO</Button2>
          </Container>
        </>
      )}
      {error && <p>Error: {error}</p>}
    </Layout>
  );
};

export default DeleteProduct;

const Alert = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #d51c1c;
  color: white;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-radius: 0.375rem;
  border: none;
`;
const Button2 = styled.button`
  background-color: #786f6f;
  color: white;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-radius: 0.375rem;
  border: none;
`;

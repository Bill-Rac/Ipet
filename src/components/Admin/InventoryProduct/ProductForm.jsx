import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { HiArrowUpTray } from "react-icons/hi2";
import { uploadFile } from "../firebase/config";

const ProductForm = ({
  _id,
  name: existingName,
  description: existingDescription,
  price: existingPrice,
  images,
}) => {
  const [name, setName] = useState(existingName || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [goToProducts, setGoToProducts] = useState(false);
  const [image, setImage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (_id) {
      setName(existingName);
      setPrice(existingPrice);
      setDescription(existingDescription);
    }
  }, [_id, existingName, existingPrice, existingDescription]);

  async function updateProduct(ev) {
    ev.preventDefault();
    try {
      const fileName = `${new Date().getMilliseconds()}-${image.name}`;
      const response = await fetch( `${import.meta.env.VITE_BACKEND_URL}/products/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
          description,
          imageURL: fileName,
        }),
      });
      if (response.ok) {
        console.log("Producto actualizado exitosamente");
        if (image) {
          await uploadFile(image, fileName);
        }
        setGoToProducts(true);
      } else {
        console.error("Error al actualizar el producto:", response.statusText);
      }
    } catch (error) {
      console.error("Error al actualizar el producto:", error.message);
    }
  }

  async function createProduct(ev) {
    ev.preventDefault();
    try {
      const fileName = `${new Date().getMilliseconds()}-${image.name}`;
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
          description,
          imageURL: fileName,
        }),
      });
      if (response.ok) {
        console.log("Producto creado exitosamente");
        if (image) {
          await uploadFile(image, fileName);
        }
        setGoToProducts(true);
      } else {
        console.error("Error al crear el producto:", response.statusText);
      }
    } catch (error) {
      console.error("Error al crear el producto:", error.message);
    }
  }

  function saveProduct(ev) {
    if (_id) {
      updateProduct(ev);
    } else {
      createProduct(ev);
    }
  }

  console.log("Product ID:", _id);

  if (goToProducts) {
    navigate("/admin/inventory");
  }

  return (
    <Formulario onSubmit={saveProduct}>
      <Subtitle>Product name</Subtitle>
      <ProductName
        placeholder="Product name"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />

      <SubtitlePic>Photos</SubtitlePic>
      <Image>
        <PhotoButton>
          <HiArrowUpTray />
          <div>Upload</div>
          <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </PhotoButton>
        {
          // !images?.length
          // &&
          <div>No Photo in this product</div>
        }
      </Image>
      <Subtitle>Description</Subtitle>
      <ProductDesc
        placeholder="Description"
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      />
      <Subtitle>Price (in USD)</Subtitle>
      <Price
        placeholder="Price"
        value={price}
        onChange={(ev) => setPrice(ev.target.value)}
      />
      <ButtonSave type="submit">Save</ButtonSave>
    </Formulario>
  );
};

export default ProductForm;

const Formulario = styled.form``;

const ProductName = styled.input`
  border-width: 2px;
  border-color: rgb(207, 189, 218);
  border-radius: 0.375rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  width: 100%;
  margin-bottom: 0.5rem;

  input:focus {
    border-color: #8e2de2;
  }
`;

const SubtitlePic = styled.label`
  color: #8e2de2;
  font-weight: bold;
`;

const Image = styled.div`
  margin-bottom: 0.5rem;
`;

const PhotoButton = styled.label`
  cursor: pointer;
  width: 8rem;
  height: 8rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  gap: 0.25rem;
  border: none;
  font-weight: bold;
  background-color: #eaeaea;
  color: #7a7373;
  border-radius: 0.5rem;
`;

const Input = styled.input`
  width: 10rem;
  height: 10rem;
  display: none;
`;

const ProductDesc = styled.textarea`
  border-width: 2px;
  border-color: rgb(207, 189, 218);
  border-radius: 0.375rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  width: 100%;
  margin-bottom: 0.5rem;

  textarea:focus {
    border-color: #8e2de2;
  }
`;

const Subtitle = styled.label`
  color: #8e2de2;
  font-weight: bold;
`;

const Price = styled.input.attrs({ type: "number" })`
  border-width: 2px;
  border-color: rgb(207, 189, 218);
  border-radius: 0.375rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  width: 100%;
  margin-bottom: 0.5rem;

  input:focus {
    border-color: #8e2de2;
  }
`;

const ButtonSave = styled.button`
  background-color: #8e2de2;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.375rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

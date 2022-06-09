import styled from 'styled-components';
import { useState } from "react";
import { 
  getStorage, 
  ref, 
  uploadBytesResumable, 
  getDownloadURL 
} from "firebase/storage";
import app from '../firebase';
import { addProduct } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const Container = styled.div`
  flex: 4;
`;

const ProductTitle = styled.h1`

`;

const ProductForm = styled.form`
  margin-top: 10px;
`;

const ProductItem = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const ProductItemLabel = styled.label`
  color: #6c757d;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ProductItemInput = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #6c757d;
`;

const ProductItemSelect = styled.select`

`;

const ProductItemOption = styled.option`

`;

const ProductButton = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  background-color: #273469;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };
          addProduct(product, dispatch);
        });
      }
    );
  }; 

  return (
    <Container>
      <ProductTitle>New Product</ProductTitle>
      <ProductForm>
        <ProductItem>
          <ProductItemLabel>Image</ProductItemLabel>
          <ProductItemInput 
            type="file" 
            id="file" 
            style={{ border: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </ProductItem>
        <ProductItem>
          <ProductItemLabel>Title</ProductItemLabel>
          <ProductItemInput
            name="title"
            type="text" 
            placeholder="MSI GF65 thin 9SD"
            onChange={handleChange}
          />
        </ProductItem>
        <ProductItem>
          <ProductItemLabel>Description</ProductItemLabel>
          <ProductItemInput
            name="desc"
            type="text" 
            placeholder="description..."
            onChange={handleChange}
          />
        </ProductItem>
        <ProductItem>
          <ProductItemLabel>Price</ProductItemLabel>
          <ProductItemInput
            name="price"
            type="number" 
            placeholder="20000"
            onChange={handleChange}
          />
        </ProductItem>
        <ProductItem>
          <ProductItemLabel>Categories</ProductItemLabel>
          <ProductItemInput
            type="text"
            placeholder='Gadgets, Computers' 
            onChange={handleCat}
          />
        </ProductItem>
        <ProductItem>
          <ProductItemLabel>Stock</ProductItemLabel>
          <ProductItemSelect name="inStock" onChange={handleChange}>
            <ProductItemOption value="true">Yes</ProductItemOption>
            <ProductItemOption value="false">No</ProductItemOption>
          </ProductItemSelect>
        </ProductItem>
        <ProductButton onClick={handleClick}>Create</ProductButton>
      </ProductForm>
    </Container>
  )
}

export default NewProduct
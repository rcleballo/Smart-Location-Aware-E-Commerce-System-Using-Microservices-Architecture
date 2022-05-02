import styled from 'styled-components';
import Chart from '../Components/Chart';
import { productData } from '../data';
import { Publish } from '@material-ui/icons';
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../requestMethods";
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductTitle = styled.h1`

`;

const ProductAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: #2a9d8f;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;

const ProductTop = styled.div`
  display: flex;

`;

const ProductBottom = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ProductTopLeft = styled.div`
  flex: 1;
`;

const ProductTopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`;

const ProductInfoBottom = styled.div`
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const ProductName = styled.span`
  font-weight: 600;
`;

const ProductInfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const ProductInfoKey = styled.span`

`;

const ProductInfoValue = styled.span`
  font-weight: 300;
`;

const ProductForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const ProductFormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductFormLabel = styled.label`
  margin-bottom: 10px;
  color: #6c757d;
`;

const ProductFormInput = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid #6c757d;
`

const ProductFormSelect = styled.select`
  margin-bottom: 10px;
`;

const ProductFormOption = styled.option`

`;

const ProductUpload = styled.div`
  display: flex;
  align-items: center;
`;

const ProductUploadImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;

const ProductUploadLabel = styled.label`

`;

const ProductUploadInput = styled.input`
  display: none;
`;

const ProductButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #273469;
  color: white;
  font-weight: 600;
`;

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a,b)=>{
            return a._id - b._id
        })
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  return (
    <Container>
      <ProductTitleContainer>
        <ProductTitle>Product</ProductTitle>
        <Link to='/newProduct'>
          <ProductAddButton>Create</ProductAddButton>
        </Link>
      </ProductTitleContainer>
      <ProductTop>
        <ProductTopLeft>
          <Chart data={pStats} dataKey='Sales' title='Sales Performance'/>
        </ProductTopLeft>
        <ProductTopRight>
          <ProductInfoTop>
            <Image src={product.img} alt='' />
            <ProductName>{product.title}</ProductName>
          </ProductInfoTop>
          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>ID: </ProductInfoKey>
              <ProductInfoValue>{product._id}</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>Sales: </ProductInfoKey>
              <ProductInfoValue>12</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>Active: </ProductInfoKey>
              <ProductInfoValue>Yes</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>In Stock: </ProductInfoKey>
              <ProductInfoValue>{product.inStock}</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>
      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <ProductFormLabel>Product Name</ProductFormLabel>
            <ProductFormInput type="text" placeholder={product.title}/>
            <ProductFormLabel>Description</ProductFormLabel>
            <ProductFormInput type="text" placeholder={product.desc}/>
            <ProductFormLabel>Price</ProductFormLabel>
            <ProductFormInput type="text" placeholder={product.price}/>
            <ProductFormLabel>In Stock</ProductFormLabel>
            <ProductFormSelect name="inStock" id="inStock">
              <ProductFormOption value="true">Yes</ProductFormOption>
              <ProductFormOption value="false">No</ProductFormOption>
            </ProductFormSelect>
            <ProductFormLabel>Active</ProductFormLabel>
            <ProductFormSelect name="active" id="active">
              <ProductFormOption value="yes">Yes</ProductFormOption>
              <ProductFormOption value="no">No</ProductFormOption>
            </ProductFormSelect>
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUpload>
              <ProductUploadImage src={product.img} alt="" />
              <ProductUploadLabel for="file">
                <Publish />
              </ProductUploadLabel>
              <ProductUploadInput type="file" id="file" />
            </ProductUpload>
            <ProductButton>Update</ProductButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </Container>
  )
}

export default Product
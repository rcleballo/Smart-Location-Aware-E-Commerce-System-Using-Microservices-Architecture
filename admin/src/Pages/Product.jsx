import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Chart from '../Components/Chart';
import { productData } from '../data';
import { Publish } from '@material-ui/icons';

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
          <Chart data={productData} dataKey='Sales' title='Sales Performance'/>
        </ProductTopLeft>
        <ProductTopRight>
          <ProductInfoTop>
            <Image src='https://i.ibb.co/HNYjMxp/81-Xdqh0b-WGL-AC-SY355.jpg' alt='' />
            <ProductName>MSI GF65 thin 9SD</ProductName>
          </ProductInfoTop>
          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>ID: </ProductInfoKey>
              <ProductInfoValue>123</ProductInfoValue>
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
              <ProductInfoValue>No</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>
      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <ProductFormLabel>Product Name</ProductFormLabel>
            <ProductFormInput type="text" placeholder="MSI GF65 thin 9SD"/>
            <ProductFormLabel>In Stock</ProductFormLabel>
            <ProductFormSelect name="inStock" id="inStock">
              <ProductFormOption value="yes">Yes</ProductFormOption>
              <ProductFormOption value="no">No</ProductFormOption>
            </ProductFormSelect>
            <ProductFormLabel>Active</ProductFormLabel>
            <ProductFormSelect name="active" id="active">
              <ProductFormOption value="yes">Yes</ProductFormOption>
              <ProductFormOption value="no">No</ProductFormOption>
            </ProductFormSelect>
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUpload>
              <ProductUploadImage src="https://i.ibb.co/HNYjMxp/81-Xdqh0b-WGL-AC-SY355.jpg" alt="" />
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
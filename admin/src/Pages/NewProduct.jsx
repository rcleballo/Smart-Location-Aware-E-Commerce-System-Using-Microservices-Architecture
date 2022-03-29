import styled from 'styled-components';

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
  return (
    <Container>
      <ProductTitle>New Product</ProductTitle>
      <ProductForm>
        <ProductItem>
          <ProductItemLabel>Image</ProductItemLabel>
          <ProductItemInput type="file" id="file" style={{ border: "none" }}/>
        </ProductItem>
        <ProductItem>
          <ProductItemLabel>Name</ProductItemLabel>
          <ProductItemInput type="text" placeholder="MSI GF65 thin 9SD" />
        </ProductItem>
        <ProductItem>
          <ProductItemLabel>Stock</ProductItemLabel>
          <ProductItemInput type="text" placeholder="10" />
        </ProductItem>
        <ProductItem>
          <ProductItemLabel>Active</ProductItemLabel>
          <ProductItemSelect>
            <ProductItemOption value="yes">Yes</ProductItemOption>
            <ProductItemOption value="no">No</ProductItemOption>
          </ProductItemSelect>
        </ProductItem>
        <ProductButton>Create</ProductButton>
      </ProductForm>
    </Container>
  )
}

export default NewProduct
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { Delete } from '@material-ui/icons';
import { productRows } from '../data';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../redux/apiCalls";

const Container = styled.div`
  flex: 4;
`;

const ProductListContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const EditButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #52b788;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    { 
      field: 'product', 
      headerName: 'Product', 
      width: 210, 
      renderCell: (params) => {
        return (
          <ProductListContainer>
            <Image src={params.row.img} alt="" />
            {params.row.title}
          </ProductListContainer>
      )
    } },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: 'price',
      headerName: 'Price',
      width: 140,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/'+params.row._id}>
              <EditButton>Edit</EditButton>
            </Link>
            <Delete style={{ color: '#d90429', cursor: 'pointer' }} onClick={() => handleDelete(params.row._id)}/>
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </Container>
  )
}

export default ProductList
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { Delete } from '@material-ui/icons';
import { productRows } from '../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'product', headerName: 'Product', width: 210, renderCell: (params) => {
      return (
        <ProductListContainer>
          <Image src={params.row.image} alt="" />
          {params.row.name}
        </ProductListContainer>
      )
    } },
    { field: 'stock', headerName: 'Stock', width: 180 },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
    },
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
            <Link to={'/product/'+params.row.id}>
              <EditButton>Edit</EditButton>
            </Link>
            <Delete style={{ color: '#d90429', cursor: 'pointer' }} onClick={() => handleDelete(params.row.id)}/>
          </>
        )
      }
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  )
}

export default ProductList
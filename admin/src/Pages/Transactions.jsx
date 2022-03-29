import styled from 'styled-components';
import { Delete, Visibility } from '@material-ui/icons';
import { transactionRows } from '../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Container = styled.div`
  flex: 4;
`;

const ViewButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

const StatusButton = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background-color: ${props => {
    switch(props.type) {
      case "Approved": 
        return "#74c69d";
      case "Declined": 
        return "#e5989b";
      default: 
        return  "#ade8f4";
    }
  }};
  color: ${props => {
    switch(props.type) {
      case "Approved": 
        return "#40916c";
      case "Declined": 
        return "#dc2f02";
      default: 
        return  "#0077b6";
    }
  }};
`;

const Transactions = () => {
  const [data, setData] = useState(transactionRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'date', headerName: 'Date', width: 100 },
    { field: 'customer', headerName: 'Customer', width: 120 },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      renderCell: (params) => {
        return (
          <StatusButton type={params.row.status}>{params.row.status}</StatusButton>
        )
      }
    },
    { field: 'items', headerName: 'Items', width: 50 },
    {
      field: 'total',
      headerName: 'Total',
      width: 80,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/transactions/'+params.row.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ViewButton>
                <Visibility style={{ fontSize: "16px", marginRight: "5px"}}/>
                Display
              </ViewButton>
            </Link>
            <Delete style={{ color: '#d90429', cursor: 'pointer', marginLeft: "10px" }} onClick={() => handleDelete(params.row.id)}/>
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

export default Transactions
import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';
import { Delete } from '@material-ui/icons';
import { staffRows } from '../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
  flex: 4;
`;

const UserContainer = styled.div`
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

const StaffList = () => {
  const [data, setData] = useState(staffRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 210, renderCell: (params) => {
      return (
        <UserContainer>
          <Image src={params.row.avatar} alt="" />
          {params.row.name}
        </UserContainer>
      )
    } },
    { field: 'email', headerName: 'Email', width: 180 },
    {
      field: 'contact',
      headerName: 'Contact',
      width: 100,
    },
    {
      field: 'joiningDate',
      headerName: 'Joining Date',
      width: 140,
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 140,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/staff/'+params.row.id}>
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

export default StaffList
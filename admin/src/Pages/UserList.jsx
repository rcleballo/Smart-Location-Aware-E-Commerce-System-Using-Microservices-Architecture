import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';
import { Delete } from '@material-ui/icons';
import { userRows } from '../data';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsers } from '../redux/apiCalls';

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

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    { field: 'name', headerName: 'User', width: 210},
    { field: 'email', headerName: 'Email', width: 180 },
    { field: 'isAdmin', headerName: 'Admin', width: 180 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/'+params.row._id}>
              <EditButton>Edit</EditButton>
            </Link>
            <Delete style={{ color: '#d90429', cursor: 'pointer' }} onClick={() => handleDelete(params.row._id)}/>
          </>
        )
      }
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
        filterModel={{
          items: [
            { columnField: 'isAdmin',
              operatorValue: 'contains', 
              value: 'false' },
          ],
        }}
      />
    </Container>
  )
}

export default UserList
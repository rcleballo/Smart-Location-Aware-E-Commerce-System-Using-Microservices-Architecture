import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserTitle = styled.h1`

`;

const UserAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: #2a9d8f;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;

const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const UserDisplay = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75); 
`;

const UserUpdate = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
`;

const UserDisplayTop = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserDisplayTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const UserDisplayUsername = styled.span`
  font-weight: 600;
`;

const UserDisplayEmail = styled.span`
  font-weight: 300;
`;

const UserDisplayBottom = styled.div`
  margin-top: 20px;
`;

const UserDisplayBottomTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #6c757d;
`;

const UserDisplayBottomInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #343a40;
`;

const UserDisplayBottomInfoTitle = styled.span`
  margin-left: 10px;
`;

const UserUpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const UserUpdateLeft = styled.div`

`;

const UserUpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const UserUpdateItemLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
`;

const UserUpdateInput = styled.input`
  border: none;
  width: 250px;
  height: 30px;
  border-bottom: 1px solid #adb5bd;
`;

const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserUpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;

const UserUpdateImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;

const UserUpdateLabel = styled.label`

`;

const UserUpdateUploadInput = styled.input`
  display: none;
`;

const UserUpdateButton = styled.button`
  border-radius: 10px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: #273469;
  color: white;
  font-weight: 600;
`;

const User = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  const user = useSelector((state) =>
    state.user.users.find((user) => user._id === userId)
  );

  return (
    <Container>
      <UserTitleContainer>
        <UserTitle>Edit User</UserTitle>
        <Link to='/newUser' >
          <UserAddButton>Create</UserAddButton>
        </Link>
      </UserTitleContainer>
      <UserContainer>
        <UserDisplay>
          <UserDisplayTop>
            <UserDisplayTopTitle>
              <UserDisplayUsername>{user.name}</UserDisplayUsername>
              <UserDisplayEmail>{user.email}</UserDisplayEmail>
            </UserDisplayTopTitle>
          </UserDisplayTop>
          <UserDisplayBottom>
            <UserDisplayBottomTitle>Account Details</UserDisplayBottomTitle>
            <UserDisplayBottomInfo>
              <PermIdentity style={{fontSize: '16px'}} />
              <UserDisplayBottomInfoTitle>{user.name} {user.lastName}</UserDisplayBottomInfoTitle>
            </UserDisplayBottomInfo>
            <UserDisplayBottomInfo>
              <MailOutline style={{fontSize: '16px'}} />
              <UserDisplayBottomInfoTitle>{user.email}</UserDisplayBottomInfoTitle>
            </UserDisplayBottomInfo>
          </UserDisplayBottom>
        </UserDisplay>
        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>
          <UserUpdateForm>
            <UserUpdateLeft>
              <UserUpdateItem>
                <UserUpdateItemLabel>Username</UserUpdateItemLabel>
                <UserUpdateInput type="text" 
                placeholder={user.username}
                />
              </UserUpdateItem>
              <UserUpdateItem>
                <UserUpdateItemLabel>First Name</UserUpdateItemLabel>
                <UserUpdateInput type="text" 
                placeholder={user.name}
                />
              </UserUpdateItem>
              <UserUpdateItem>
                <UserUpdateItemLabel>First Name</UserUpdateItemLabel>
                <UserUpdateInput type="text" 
                placeholder={user.lastName}
                />
              </UserUpdateItem>
              <UserUpdateItem>
                <UserUpdateItemLabel>Email</UserUpdateItemLabel>
                <UserUpdateInput type="text" 
                placeholder={user.email}
                />
              </UserUpdateItem>
            </UserUpdateLeft>
            <UserUpdateRight>
              <UserUpdateButton>Update</UserUpdateButton>
            </UserUpdateRight>
          </UserUpdateForm>
        </UserUpdate>
      </UserContainer>
    </Container>
  )
}

export default User
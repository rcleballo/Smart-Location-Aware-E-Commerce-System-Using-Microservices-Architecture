import styled from 'styled-components';

const Container = styled.div`
  flex: 4;
`;

const NewUserTitle = styled.h1`

`;

const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const NewUserItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;

const NewUserItemLabel = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #6c757d;
`;

const NewUserItemInput = styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid #6c757d;
  border-radius: 5px;
`;

const NewUserGender = styled.div`

`;

const NewUserItemLabelRadio = styled.label`
  margin: 10px;
  font-size: 18px;
  color: #6c757d;
`;

const NewUserItemInputRadio = styled.input`
  margin-top: 15px;
`;

const NewUserSelect = styled.select`
  height: 40px;
  border-radius: 5px;
`;

const NewUserOption = styled.option`

`;

const NewUserButton = styled.button`
  width: 200px;
  border: none;
  background-color: #023e8a;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;;
  cursor: pointer;
`;

const NewUser = () => {
  return (
    <Container>
      <NewUserTitle>New User</NewUserTitle>
      <NewUserForm>
        <NewUserItem>
          <NewUserItemLabel>Username</NewUserItemLabel>
          <NewUserItemInput type="text" placeholder="John"/>
        </NewUserItem>
        <NewUserItem>
          <NewUserItemLabel>Full Name</NewUserItemLabel>
          <NewUserItemInput type="text" placeholder="John Smith"/>
        </NewUserItem>
        <NewUserItem>
          <NewUserItemLabel>Email</NewUserItemLabel>
          <NewUserItemInput type="email" placeholder="johnsmith@gmail.com"/>
        </NewUserItem>
        <NewUserItem>
          <NewUserItemLabel>Password</NewUserItemLabel>
          <NewUserItemInput type="password" placeholder="password"/>
        </NewUserItem>
        <NewUserItem>
          <NewUserItemLabel>Phone</NewUserItemLabel>
          <NewUserItemInput type="text" placeholder="+266 5687 5643"/>
        </NewUserItem>
        <NewUserItem>
          <NewUserItemLabel>Address</NewUserItemLabel>
          <NewUserItemInput type="text" placeholder="Maseru Roma 180 Lesotho"/>
        </NewUserItem>
        <NewUserItem>
          <NewUserItemLabel>Gender</NewUserItemLabel>
          <NewUserGender>
            <NewUserItemInputRadio type="radio" name="gender" id="male" value="male"/>
            <NewUserItemLabelRadio for='Male'>Male</NewUserItemLabelRadio>
            <NewUserItemInputRadio type='radio' name="gender" id="female" value="female"/>
            <NewUserItemLabelRadio for='Female'>Female</NewUserItemLabelRadio>
            <NewUserItemInputRadio type='radio' name="gender" id="others" value="other"/>
            <NewUserItemLabelRadio for='Other'>Other</NewUserItemLabelRadio>
          </NewUserGender>
        </NewUserItem>
        <NewUserItem>
          <NewUserItemLabel>Active</NewUserItemLabel>
          <NewUserSelect name="active" id="active">
            <NewUserOption value="yes">Yes</NewUserOption>
            <NewUserOption value="no">No</NewUserOption>
          </NewUserSelect>
        </NewUserItem>
        <NewUserButton>Create</NewUserButton>
      </NewUserForm>
    </Container>
  )
}

export default NewUser
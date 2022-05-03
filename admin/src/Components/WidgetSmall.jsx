import { Visibility } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { userRequest } from '../requestMethods';

const Widget = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
`;

const WidgetTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const WidgetList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const WidgetListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: 600;
`;

const UserEmail = styled.span`
  font-weight: 300;
`;

const WidgetButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

const WidgetSmall = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  return (
    <Widget>
      <WidgetTitle>New Users</WidgetTitle>
      <WidgetList>
      {users.map((user) => (
        <WidgetListItem key={user._id}>
          <Image src={
            user.img || 
            "https://i.ibb.co/r7hyySM/cda8ff1bcb7f335719b146d61f6f494a.png"}
            alt=""
          />
          <User>
            <UserName>{user.username}</UserName>
          </User>
          <WidgetButton>
            <Visibility style={{ fontSize: "16px", marginRight: "5px"}}/>
            Display
          </WidgetButton>
        </WidgetListItem>
      ))}
      </WidgetList>
    </Widget>
  )
}

export default WidgetSmall
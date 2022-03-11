import { Visibility } from '@material-ui/icons';
import styled from 'styled-components';

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
  return (
    <Widget>
      <WidgetTitle>New Users</WidgetTitle>
      <WidgetList>
        <WidgetListItem>
          <Image src="https://i.ibb.co/r7hyySM/cda8ff1bcb7f335719b146d61f6f494a.png"/>
          <User>
            <UserName>Average Joe</UserName>
            <UserEmail>averagejoe@gmail.com</UserEmail>
          </User>
          <WidgetButton>
            <Visibility style={{ fontSize: "16px", marginRight: "5px"}}/>
            Display
          </WidgetButton>
        </WidgetListItem>
        <WidgetListItem>
          <Image src="https://i.ibb.co/r7hyySM/cda8ff1bcb7f335719b146d61f6f494a.png"/>
          <User>
            <UserName>Average Joe</UserName>
            <UserEmail>averagejoe@gmail.com</UserEmail>
          </User>
          <WidgetButton>
            <Visibility style={{ fontSize: "16px", marginRight: "5px"}}/>
            Display
          </WidgetButton>
        </WidgetListItem>
        <WidgetListItem>
          <Image src="https://i.ibb.co/r7hyySM/cda8ff1bcb7f335719b146d61f6f494a.png"/>
          <User>
            <UserName>John Smith</UserName>
            <UserEmail>johnsmith@gmail.com</UserEmail>
          </User>
          <WidgetButton>
            <Visibility style={{ fontSize: "16px", marginRight: "5px"}}/>
            Display
          </WidgetButton>
        </WidgetListItem>
        <WidgetListItem>
          <Image src="https://i.ibb.co/r7hyySM/cda8ff1bcb7f335719b146d61f6f494a.png"/>
          <User>
            <UserName>John Doe</UserName>
            <UserEmail>johndoe@gmail.com</UserEmail>
          </User>
          <WidgetButton>
            <Visibility style={{ fontSize: "16px", marginRight: "5px"}}/>
            Display
          </WidgetButton>
        </WidgetListItem>
        <WidgetListItem>
          <Image src="https://i.ibb.co/r7hyySM/cda8ff1bcb7f335719b146d61f6f494a.png"/>
          <User>
            <UserName>Jane Doe</UserName>
            <UserEmail>janedoe@gmail.com</UserEmail>
          </User>
          <WidgetButton>
            <Visibility style={{ fontSize: "16px", marginRight: "5px"}}/>
            Display
          </WidgetButton>
        </WidgetListItem>
        <WidgetListItem>
          <Image src="https://i.ibb.co/r7hyySM/cda8ff1bcb7f335719b146d61f6f494a.png"/>
          <User>
            <UserName>Jane Smith</UserName>
            <UserEmail>janesmith@gmail.com</UserEmail>
          </User>
          <WidgetButton>
            <Visibility style={{ fontSize: "16px", marginRight: "5px"}}/>
            Display
          </WidgetButton>
        </WidgetListItem>
        <WidgetListItem>
          <Image src="https://i.ibb.co/r7hyySM/cda8ff1bcb7f335719b146d61f6f494a.png"/>
          <User>
            <UserName>Average Jane</UserName>
            <UserEmail>averagejane@gmail.com</UserEmail>
          </User>
          <WidgetButton>
            <Visibility style={{ fontSize: "16px", marginRight: "5px"}}/>
            Display
          </WidgetButton>
        </WidgetListItem>
      </WidgetList>
    </Widget>
  )
}

export default WidgetSmall
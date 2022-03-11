import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;

const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const Menu = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`;

const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;

  &:hover {
    background-color: rgb(240, 240, 255);
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <SidebarList>
            <SidebarListItem>
              <LineStyle style={{ marginRight: "5px", fontSize: "20px" }}/>
              Home
            </SidebarListItem>
            <SidebarListItem>
              <Timeline style={{ marginRight: "5px", fontSize: "20px" }}/>
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <TrendingUp style={{ marginRight: "5px", fontSize: "20px" }}/>
              Sales
            </SidebarListItem>
          </SidebarList>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <SidebarList>
            <SidebarListItem>
              <PermIdentity style={{ marginRight: "5px", fontSize: "20px" }}/>
              Users
            </SidebarListItem>
            <SidebarListItem>
              <Storefront style={{ marginRight: "5px", fontSize: "20px" }}/>
              Products
            </SidebarListItem>
            <SidebarListItem>
              <AttachMoney style={{ marginRight: "5px", fontSize: "20px" }}/>
              Transactions
            </SidebarListItem>
            <SidebarListItem>
              <BarChart style={{ marginRight: "5px", fontSize: "20px" }}/>
              Reports
            </SidebarListItem>
          </SidebarList>
        </Menu>
        <Menu>
          <Title>Notifications</Title>
          <SidebarList>
            <SidebarListItem>
              <MailOutline style={{ marginRight: "5px", fontSize: "20px" }}/>
              Mail
            </SidebarListItem>
            <SidebarListItem>
              <DynamicFeed style={{ marginRight: "5px", fontSize: "20px" }}/>
              Feedback
            </SidebarListItem>
            <SidebarListItem>
              <ChatBubbleOutline style={{ marginRight: "5px", fontSize: "20px" }}/>
              Messages
            </SidebarListItem>
          </SidebarList>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <SidebarList>
            <SidebarListItem>
              <WorkOutline style={{ marginRight: "5px", fontSize: "20px" }}/>
              Manage
            </SidebarListItem>
            <SidebarListItem>
              <Timeline style={{ marginRight: "5px", fontSize: "20px" }}/>
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <Report style={{ marginRight: "5px", fontSize: "20px" }}/>
              Reports
            </SidebarListItem>
          </SidebarList>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar
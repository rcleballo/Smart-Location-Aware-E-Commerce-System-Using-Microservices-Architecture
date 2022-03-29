import { AttachMoney, LineStyle, PermIdentity, Storefront, Timeline, WorkOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
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

const CustomeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
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
            <CustomeLink to='/'>
              <SidebarListItem>
                <LineStyle style={{ marginRight: "5px", fontSize: "20px" }}/>
                Home
              </SidebarListItem>
            </CustomeLink>
            <CustomeLink to='/analytics'>
              <SidebarListItem>
                <Timeline style={{ marginRight: "5px", fontSize: "20px" }}/>
                Analytics
              </SidebarListItem>
            </CustomeLink>
          </SidebarList>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <SidebarList>
            <CustomeLink to='/users'>
              <SidebarListItem>
                <PermIdentity style={{ marginRight: "5px", fontSize: "20px" }}/>
                Users
              </SidebarListItem>
            </CustomeLink>
            <CustomeLink to='/products'>
              <SidebarListItem>
                <Storefront style={{ marginRight: "5px", fontSize: "20px" }}/>
                Products
              </SidebarListItem>
            </CustomeLink>
            <CustomeLink to='/transactions'>
              <SidebarListItem>
                <AttachMoney style={{ marginRight: "5px", fontSize: "20px" }}/>
                Transactions
              </SidebarListItem>
            </CustomeLink>
          </SidebarList>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <SidebarList>
            <CustomeLink to='/staff'>
              <SidebarListItem>
                <WorkOutline style={{ marginRight: "5px", fontSize: "20px" }}/>
                Manage
              </SidebarListItem>
            </CustomeLink>
          </SidebarList>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar
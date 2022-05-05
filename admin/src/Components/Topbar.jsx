import { Language, Notifications, Settings } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopLeft = styled.div`

`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: #219ebc;
  cursor: pointer;
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

const TopIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;

const TopIconBadge = styled.span`
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: #e63946;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <TopLeft>
          <Logo>Admin</Logo>
        </TopLeft>
        <TopRight>
          <TopIconContainer>
            <Settings />
          </TopIconContainer>
        </TopRight>
      </Wrapper>
    </Container>
  )
}

export default Topbar
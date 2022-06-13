import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile } from '../responsive';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-Left: 25px;
  padding:5px;
  ${mobile({ marginLeft: "10px" })}
`

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px", height: "10px" })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 4, justifyContent: "center" })}
`

const MenuItem = styled.div`
  font-size: 14px;
  curser: pointer;
  margin-Left: 20px;
  ${mobile({ fontSize: "10px", marginLeft: "10px" })}
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`

const CustomeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  const location = useLocation();
  const loc = location.pathname.substring(location.pathname.indexOf("/") + 1);;
  const user = useSelector((state) => state.user.currentUser);
  
  return (
  <Container>
    <Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input placeholder="Search"/>
          <Search style={{color: "grey", fontSize:16}}/>
        </SearchContainer>
      </Left>
      <CustomeLink to='/'>
        <Center><Logo>E-Shop</Logo></Center>
      </CustomeLink>
      <Right>
        <CustomeLink to='/stores'>
          <MenuItem>STORES</MenuItem>
        </CustomeLink>
        <CustomeLink to={user ? '/'+loc : '/register'}>
          <MenuItem>REGISTER</MenuItem>
        </CustomeLink>
        <CustomeLink to={user ? '/'+loc : '/login'}>
          <MenuItem>SIGN IN</MenuItem>
        </CustomeLink>
        <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Link>
      </Right>
    </Wrapper>
  </Container>
  );
};

export default Navbar;

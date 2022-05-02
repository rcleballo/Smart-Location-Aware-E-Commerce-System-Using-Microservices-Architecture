import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

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

const Navbar = () => {
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
      <Center><Logo>ShopE</Logo></Center>
      <Right>
        <MenuItem>STORES</MenuItem>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={4} color="primary">
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

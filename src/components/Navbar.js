import React from "react";
import styled from 'styled-components';
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
const Container = styled.div`
  height: 60px;
`;

const Wrap = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
font-size:14px
cursor:pointer;
margin-left:25px;
`



const Navbar = ()=>{
    return(
        <div>
            <Container>
                <Wrap>
                   <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        Input
                        <Input />
                       <Search />
                    </SearchContainer>
                    </Left>
                   <Center><Logo>OZ ONLINE SHOPPING</Logo></Center>
                   <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
                    
                    <ShoppingCartCheckoutIcon />
                        </Badge>
                    </MenuItem>
                   </Right>
                </Wrap>
            </Container>
        </div>
    )
}
export default Navbar;
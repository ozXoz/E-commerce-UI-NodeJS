import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  height: 30%;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};


export default CategoryItem
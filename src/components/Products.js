import React from 'react'
import { styled } from 'styled-components'
import { topSeller } from '../MainPageData'
import ProductsDisplay from './ProductsDisplay';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContentPasteSearchRoundedIcon from '@mui/icons-material/ContentPasteSearchRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  justify-content: center;
  align-items: center;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  margin-bottom: 40px; /* add margin to create space */
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  top: -50px;
  padding: 0 10px;
  
`;


const Icon = styled.div`
  width: 30px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    
  }
`;

const Products = () => {
  return (
    <Container>
      {topSeller.map(item => (
        <ProductContainer key={item.id}>
          <ImageContainer>
            <Image src={item.img} />
            <IconContainer>
              <Icon>
                <ShoppingCartIcon fontSize="small" />
              </Icon>

              <Icon>
                <ContentPasteSearchRoundedIcon fontSize="small" />
              </Icon>

              <Icon>
                <FavoriteBorderRoundedIcon fontSize="small" />
              </Icon>
            </IconContainer>
          </ImageContainer>
          <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>Buy Now</button>
          </div>
        </ProductContainer>
      ))}
    </Container>
  );
};

export default Products;

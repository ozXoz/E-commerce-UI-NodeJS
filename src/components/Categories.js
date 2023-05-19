import React from 'react'
import { styled } from 'styled-components'
import {categories} from '../MainPageData' // Where Data gets from .
import CategoryItem from './CategoryItem'
const Container = styled.div`
display:flex;
padding:50px;`;


const Categories = () => {
    return (
      <Container>
        {categories.map(item => (
          <CategoryItem item={item} />
        ))}
      </Container>
    );
  };
  

export default Categories
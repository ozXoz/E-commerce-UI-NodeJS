import React from 'react'
import { styled } from 'styled-components'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState } from 'react';
import { Sliders } from '../MainPageData';



const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
  //  cursor: pointer;
  opacity: 0.5;
   z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
// Later On implemant here .... !
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  width:220%;
  object-fit: cover;
  padding-top: 20px;
`;


const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  position: relative;
`;

const Title = styled.h1`
  font-size: 20px;
  display: flex;
  height: 600px;
  top: 30%;
  left: 80%;
  transform: translate(-105%, 0%);
  z-index: 1;
`;

const Button =styled.button`
font-size: 20px;
display: flex;
height: 30px;
position: absolute;
top: 32%;
left: 62%;
transform: translate(40%, 50%);
z-index: 1;
`;






const Slider = () => {
  
    const [slideIndex, setSlideIndex] = useState(0);
  
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : Sliders.length - 1);
      } else {
        setSlideIndex(slideIndex < Sliders.length - 1 ? slideIndex + 1 : 0);
      }
    };
    

  

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardDoubleArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {Sliders.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardDoubleArrowRightIcon />
      </Arrow>
    </Container>
  );
  
};


export default Slider


import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
height:40px;
background-color:teal;
display:flex;
color:white;
justify-content:center;
margin:20px;
`
export default function Announcement() {
  return (
   <Container>
    Deal If you spend 50$ or more, You will get shipping by our house ....
   </Container>
  )
}

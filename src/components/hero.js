import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useGlobalContext } from '../context'
import img from '../img/me-1.png'
import {mobile} from '../responsive'
const Container = styled.div`
width: 98vw;
height: 100vh;
overflow: hidden;
`
const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
${mobile({
  flexDirection: 'column-reverse'
})}
`
const TitleContainer = styled.div`
flex: 1;
${mobile({
  transform: 'translateY(70px)'
})}
`
const ImgContainer = styled.div`
display: flex;
flex: 1.7;
align-items: center;
justify-content: center;
${mobile({
  marginTop: '15px'
})}
`
const Img = styled.img`
width: 400px;
transform: translateY(5rem);
z-index: 1000;
${mobile({
  width: '200px',
  positon: 'absolute',

})}
`
const width = keyframes`
  0% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
`
const titleAnimation = keyframes`
 100% {
     color: black;
 }
`
const Title = styled.h1`
  display: block;
  width: fit-content;
  color: transparent;
  z-index: 100;
  font-size: 3.5rem;
  font-weight: 600;
  margin: 10px 0;
  position: relative;
  animation-name: ${titleAnimation};
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  ${mobile({
  fontSize: '2.5rem'
})}
  ${props => props.type === 'name' && {
    fontSize: '5rem',
    marginBottom: '30px'
  }}
  `
const Span = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #1268b2;
  top: 0;
  left: 0;
  animation-name: ${width};
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-delay: 1s;
`
const Resume = styled.a`
letter-spacing: 1px;
background-color: #c8e5e1;
border: 3px dashed #1268b2;
padding: 10px 15px;
font-size: 25px;
color: #1268b2;
border-radius: 10px;
cursor: pointer;
text-decoration: none;
transition: all 0.3s ease;
&:hover{
  background-color: #1268b2;
  color: #c8e5e1;
  border: 3px solid #1268b2;
}
${mobile({
  fontSize: '20px'
})}
`
const Hero = () => {
    const {closeSubmenu} = useGlobalContext()
  return (<Container onMouseOver={closeSubmenu}>
            <Header>
            <ImgContainer>
            <Img src={img}/>
            </ImgContainer>
            <TitleContainer>
                <Title>Hello<Span></Span></Title>
                <Title>My name is<Span></Span></Title>
                <Title type='name'>Ricardo<Span></Span></Title>
                <Resume target='_BLANK'>RESUME</Resume>
            </TitleContainer>
            </Header>
        </Container>
  )
}

export default Hero
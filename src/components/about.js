import React from 'react'
import styled from 'styled-components'
import img from '../img/me-2.png'
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import {mobile} from '../responsive'
const Container = styled.div`
width: 85vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
${mobile({
  flexDirection: 'column-reverse',
  height: 'auto',
  marginTop: '100px'
})}
`

const Title = styled.h1`
width: 50%;
overflow: hidden;
`
const ImgContainer = styled.div`
flex: 1;
`
const Img = styled.img`
width: 350px;
`
const TextContainer = styled.div`
flex: 1;
margin-right: 30px;
background-color: white;
padding: 20px 15px;
border-radius: 5px;
box-shadow: -5px 10px 10px rgba(0,0,0,0.2);
${mobile({
  margin: 'auto'
})}
`
const Text = styled.p`
margin: 20px 0;
`
const Portfolio = styled.a`
border: 2px dashed #1268b2;
border-radius: 5px;
padding: 5px 10px;
background-color: #c8e5e1;
font-size: 20px;
text-transform: uppercase;
letter-spacing: 1px;
color: #1268b2;
transition: all 0.3s ease;
cursor: pointer;
&:hover{
  border: 2px solid #1268b2;
  background-color: #1268b2;
  color: #c8e5e1;
}
`
const To = styled.button`
background-color: transparent;
border: none;
font-size: 15px;
color: lightcoral;
cursor: pointer;
`
const Bottom = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-between;
`
const About = () => {
    const {closeSubmenu} = useGlobalContext()
  return (
    <Container onMouseOver={closeSubmenu}>
        <ImgContainer>
        <Img src={img}/>
        </ImgContainer>
        <TextContainer>
          <Title>About Me</Title>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptate perspiciatis, porro delectus in eligendi molestiae cumque perferendis sapiente repellat aliquid vitae harum cupiditate ducimus earum sed sunt repudiandae unde?</Text>
          <Bottom>
          <Portfolio>resume</Portfolio>
          <Link to='moreabout'>
          <To>More About</To>
          </Link>
          </Bottom>
          
        </TextContainer>
    </Container>

  )
}

export default About
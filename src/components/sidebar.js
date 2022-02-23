import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import mobile from '../responsive'
const Container = styled.div`
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.6);
position: fixed;
top: 0;
z-index: 10000;
display: flex;
justify-content: center;
align-items: center;
left: 100%;
transition: all 0.5s linear;
overflow: hidden;
${props => props.type === 'open' && {
    display: 'flex',
    left: '0'
}}
${props => props.type === 'closed' && {
    left: '100%'
}}
`
const List = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`
const Dir = styled.a`
color: white;
text-decoration: none;
font-size: 50px;
font-weight: 900;
transition: all 0.3s ease;
position: relative;
&:hover{
  color: #ddd;
}
&::after{
  content: attr(data-after);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%, -50%);
  opacity: 0;
  font-size: 5rem;
  letter-spacing: 5px;
  z-index: -1;
  text-transform: uppercase;
  color: rgba(240, 248, 255, 0.2);
  letter-spacing: 1rem;
  white-space: nowrap;
  transition: all 0.5s ease;
  filter: blur(1);
}
&:hover::after{
  opacity: 1;
  transform: translate(-50%, -50%);
}
`

const Sidebar = () => {
    const {isSidebarOpen} = useGlobalContext()
  return (
    <Container type={isSidebarOpen? 'open': 'closed'}>
    <List>
        <Link to='/' style={{textDecoration: 'none', marginBottom: '30px'}}>
        <Dir href="#hero" data-after="home">Home</Dir>
        </Link>
        <Link to='/moreabout' style={{textDecoration: 'none', marginBottom: '30px'}}>
        <Dir href="#about" data-after="more about">More About</Dir>
        </Link>
        <Link to='/contact' style={{textDecoration: 'none'}}>
        <Dir href="#contact" data-after="contact">Contact</Dir>
        </Link>
    </List>
    </Container>
  )
}

export default Sidebar

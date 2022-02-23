import React from 'react'
import styled from 'styled-components'
import Submenu from './submenus'
import {useGlobalContext} from '../context'
import {Link } from 'react-router-dom'
import { keyframes } from 'styled-components'
import Sidebar from './sidebar'
import {mobile} from '../responsive'
const Container = styled.div`
display: flex;
width: 100%;
height: 4rem;
background-color: #1268b2;
justify-content: space-between;
align-items: center;
padding: 0 20px;
position: fixed;
top: 0;
z-index: 10000000;
transition: all 0.5s ease;
${props => props.type === 'closed' && {
  backgroundColor: 'transparent',
}}
`
const Brand = styled.div`
flex: 1;
${props => props.type === 'closed' && {
  display: 'none'
}}
`
const Title = styled.a`
text-decoration: none;
color: white;
font-size: 30px;
white-space: nowrap;
font-weight: 900;
letter-spacing: 1px;
`
const List = styled.div`
flex:1;
padding-right: 80px;
${mobile({
  paddingRight: '20px'
})}
`
const animation = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.3);
  }
`
const Ham = styled.div`
  z-index: 100000;
  height: 45px;
  width: 45px;
  border: 3px solid white;
  border-radius: 50%;
  position: relative;
  float: right;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: scale(0.7);
  display: none;
  &::after{
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 3px solid white;
  animation: ${animation} 1s ease infinite;
  }
  ${mobile({
    display: 'flex'
  })}
  `
const Bar = styled.div`
  width: 60%;
  height: 2px;
  background-color: white;
  position: relative;
${props => props.type === 'opened' && {
  transform: 'rotate(45deg)',
  top: '0',
  left: '0'
}}
  &::after{
  content: "";
  position: absolute;
  height: 100%;
  width: 80%;
  left: 50%;
  background-color: white;
  transition: 0.3s ease;
  z-index: 1000000;
  transform: translate(-50%);
  top: -8px;
  ${props => props.type === 'opened' && {
    opacity: '0'
  }}
  }
  &::before{
      content: "";
  position: absolute;
  height: 100%;
  width: 80%;
  left: 50%;
  background-color: white;
  transition: 0.3s ease;
  z-index: 1000000;
  transform: translate(-50%);
  top: 8px;
  ${props => props.type === 'opened' && {
    transform: 'rotate(-90deg)',
    top: '0px',
    left: '0px',
    width: '100%'
  }}
  }
  `
const Items = styled.ul`
display: flex;
list-style: none;
float: right;
 ${mobile({
    display: 'none'
  })}
`
const Li = styled.li`
margin-left: 20px;
`
const Dir = styled.a`
color: white;
text-decoration: none;
transition: all 0.2s ease;
&:hover{
  color: #ddd;
}
`

const Navbar = () => {
    const {openSubmenu, setIsSidebarOpen, isSidebarOpen} = useGlobalContext()
    const displaySubmenu = (e)=>{
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right)/2 - 265
    const bottom = tempBtn.bottom + 3
    openSubmenu({center, bottom})
    }

  return (<>
    <Container type={isSidebarOpen? 'closed': 'opened'}>
        <Brand className="brand" >
            <Title href="#hero">Ricardo Alvarez</Title>
        </Brand>

        <List>
            <Items type={isSidebarOpen? 'closed': 'opened'}>
                    <Link  to='/' style={{textDecoration: 'none'}}>
                    <Li ><Dir  data-after="home">Home</Dir></Li>
                    </Link>
                    <Link  to='/moreabout' style={{textDecoration: 'none'}}>
                    <Li ><Dir  data-after="more about">More About</Dir></Li>
                    </Link>
                    <Link to='/contact' style={{textDecoration: 'none'}}>
                    <Li ><Dir   data-after="contact" onMouseOver={displaySubmenu}>Contact</Dir></Li>
                    </Link>
        </Items>
            <Ham onClick={()=> setIsSidebarOpen(!isSidebarOpen)}><Bar type={isSidebarOpen? 'opened': 'closed'}></Bar></Ham>
        </List>
    </Container>
    <Submenu>

    </Submenu>
    <Sidebar/>
  </>
  )
}

export default Navbar

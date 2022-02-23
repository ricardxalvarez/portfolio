import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Container = styled.div`
position: absolute;
z-index: 100000;
top: 3rem;
left: 60vw;
display: none;
${props => props.type === 'open' && {
    display: 'initial'
}
}
`
const TitleContainer = styled.div`
padding: 5px 10px;
background-color: white;
border-radius: 5px;
text-align: center;
box-shadow: -10px 10px 10px rgb(0,0,0,0.2);
&::before{
content: "";
  display: block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid white;
  position: absolute;
  top: -5px;
  left: 90%;
  transform: translateX(-50%);
}
`
const Title = styled.p`
margin: 5px auto;
`
const Submenu = () => {
    const {isSubmenuOpen, location, closeSubmenu} = useGlobalContext()
    const container = useRef(null)
    useEffect(()=>{
        const submenu = container.current
        const {center, bottom} = location
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`
    })
  return (
    <Container ref={container} type={`${isSubmenuOpen ? 'open': ''}`} onMouseLeave={closeSubmenu}>
        <TitleContainer>
        <Title>+58 412-071.36.71</Title>
        <Title>ricardoandresalvarez62341@gmail.com</Title>
        </TitleContainer>
    </Container>
  )
}

export default Submenu

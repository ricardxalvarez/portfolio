import React, { useState, useEffect } from 'react'
import { languages } from '../data'
import styled from 'styled-components'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useGlobalContext } from '../context';
import {mobile} from '../responsive'
const Container = styled.div`
position: relative;
width: 45vw;
display: flex;
justify-content: center;
margin: 30px auto;
height: 45vh;
${mobile({
  width: '75vw'
})}
`
const ImgContainer = styled.div`
width: 150px;
`
const TitleContainer = styled.div``
const Title = styled.h1`
text-transform: uppercase;
letter-spacing: 0.2rem;
margin-top: 10px;
font-weight: 300;
`
const Info = styled.div`
position: absolute;
top: 100px;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
opacity: 0;
transition: all 0.3s linear;
${props => props.type === 'activeSlide' && {
  opacity: '1',
  transform: 'translateX(0)'
}
}
${props => props.type === 'nextSlide' && {
  transform: 'translateX(50%)',
}
}
${props => props.type === 'lastSlide' &&{
transform: 'translateX(-50%)',
}
} 
`
const Button = styled.button`
z-index: 1000;
  position: absolute;
  top: 180px;
  transform: translateY(-50%);
  background: #1268b2;
  color: white;
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  font-size: 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  ${props => props.className === 'prev' && {
    left: '0'
  }}
  ${props => props.className === 'next' && {
    right: '0'
  }}
`
const MyTitle = styled.h1`
font-weight: 900;
margin-top: 10px;
`
const SectionContainer = styled.div``
const Circle = styled.div`
height: 170px;
width: 170px;
border-radius: 50%;
background-color: white;
position: absolute;
top: -10px;
z-index: -1;
`
const Slider = () => {
  const [index, setIndex] = useState(0)
  const {closeSubmenu} = useGlobalContext()
   useEffect(()=>{
    let slider = setInterval(()=>{
      setIndex( index + 1)
    },3000)
    return ()=> clearInterval(slider)
  },[index])

  return (
    <Container onMouseOver={closeSubmenu}>
      <SectionContainer>
        <MyTitle>Familiarized with</MyTitle>
      </SectionContainer>
        {
          languages.map((item, personIndex)=>{
            const {img, title} = item
            let position = 'nextSlide'
            
            if (personIndex === index){
              position='activeSlide'
            }
            // else if (personIndex === index - 1 || (index === 0 && personIndex === languages.length - 1)){
            //   position = 'lastSlide'
            // }
            if (index === -1){
              setIndex(languages.length - 1)
            }
            if (index === languages.length){
              setIndex(0)
            }
            return ( <><Info key={personIndex} type={position}>
              <ImgContainer type={position}>{img}</ImgContainer>
            <Circle/>
            <TitleContainer><Title>{title}</Title></TitleContainer>
            </Info>
          </>
              )
            })
          }
          <Button className="prev" onClick={()=> setIndex(index - 1)}><FiChevronLeft/></Button>
          <Button className="next" onClick={()=> setIndex(index + 1)}><FiChevronRight/></Button>
    </Container>
  )
}

export default Slider
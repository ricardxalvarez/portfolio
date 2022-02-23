import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import styled from 'styled-components'
import {languages} from '../data'
import illustrator from '../img/illustrator.svg'
import photoship from '../img/photoshop.svg'
import react from '../img/react.svg'
import {mobile} from '../responsive'
const Components = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 50px;
`
const Item = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 10px;
text-align: center;
`
const Title = styled.h2`
margin-top: 15px;
text-transform: uppercase;
font-size: 20px;
`
const ImgContainer = styled.div`
width: 120px;
height: 120px;
`
const Img = styled.img`
width: 120px;
height: 120px;
`
const Top = styled.div``
const TopTitle = styled.h1`
font-size: 50px;
font-weight: 300;
margin-bottom: 50px;
letter-spacing: 0.1rem;
`
const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`
const Arrow = styled.div`
position: absolute;
top: 88vh;
background-color: white;
padding: 10px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
${mobile({
  left: '80vw'
})}
`
const S = styled.span`
color: #1268b2;
`
const Skills = () => {
    let data = languages.slice(0,3)

  return (
    <Components>
        <Arrow>
            <AiOutlineArrowDown/>
        </Arrow>
        <Top>
            <TopTitle><S>M</S>y <S>S</S>kills</TopTitle>
        </Top>
        <Wrapper>

        {
            data.map((item)=>{
                return (<Item>
                    <ImgContainer>{item.img}</ImgContainer>
                    <Title>{item.title}</Title>
                    </Item>)
            })
        }
        <Item>
            <ImgContainer>
            <Img src={react} style={{width: '140px', height: '140px', transform: 'translate(-8px, -7px)'}}/>
            </ImgContainer>
            <Title>react</Title>
        </Item>
        <Item>
            <ImgContainer>
            <Img src={illustrator}/>
            </ImgContainer>
            <Title>illustrator</Title>
        </Item>
        <Item>
            <ImgContainer>
            <Img src={photoship}/>
            </ImgContainer>
            <Title>photoshop</Title>
        </Item>
        </Wrapper>
    </Components>
  )
}

export default Skills
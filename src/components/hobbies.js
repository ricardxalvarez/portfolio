import React from 'react'
import styled from 'styled-components'
import { hobbie } from '../data'
import img from '../img/me-3.png'
import {mobile} from '../responsive'
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px;
`
const Top = styled.div``
const TopTitle = styled.h1`
font-size: 50px;
font-weight: 300;
letter-spacing: 0.1rem;
`
const Wrapper = styled.div`
display: flex;
flex-direction: row-reverse;
width: 100%;
margin-top: 30px;
${mobile({
  marginTop: '40px'
})}
`
const MeContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
${mobile({
  display: 'none'
})}
`
const MeImg = styled.img`
width: 150px;
margin-right: 50px;
`
const ItemsCont = styled.div`
flex: 2;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
const Item = styled.div`
display: flex;
align-items: center;
background-color: white;
margin: 10px 0;
padding: 5px 10px;
border-radius: 5px;
width: 40vw;
box-shadow: -5px 10px 10px rgba(0,0,0,0.2);
`
const Title = styled.h3`
margin-right: 10px;
`
const ImgContainer = styled.div``
const Img = styled.img`
width: 40px;
`
const S = styled.span`
color: #1268b2;
`
const Hobbies = () => {
  return (
    <Container>
      <Top>
        <TopTitle>My H<S>o</S>bbies</TopTitle>
      </Top>
      <Wrapper>
        <MeContainer>
          <MeImg src={img}/>
        </MeContainer>
        <ItemsCont>
          {
            hobbie.map((item, index)=>{
              return (<Item key={index}>
                <Title>{item.title}</Title>
                <ImgContainer>
                <Img src={item.img}/>
                </ImgContainer>
              </Item>)
            })
          }
        </ItemsCont>
      </Wrapper>
    </Container>
  )
}

export default Hobbies
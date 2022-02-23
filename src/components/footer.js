import React from 'react'
import styled from 'styled-components'
import {AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail} from 'react-icons/ai'

const Container = styled.div`
width: 100%;
height: 40vh;
background-color: #1268b2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const TopCont = styled.div`
text-align: center;
color: #c8e5e1;
`
const Title = styled.h1`
letter-spacing: 1px;
`
const Desc = styled.p``
const Icons = styled.div`
display: flex;
margin-top: 10px;
`
const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: #c8e5e1;
display: flex;
justify-content: center;
align-items: center;
margin: 0 10px;
font-size: 25px;
`
const A = styled.a`

`
const Footer = () => {
  return (
    <Container>
      <TopCont>
        <Title>Ricardo Alvarez</Title>
        <Desc>A Good Old-Fashioned Developer</Desc>
      </TopCont>
      <Icons>
          <A title='my personal instagram' href='https://www.instagram.com/ricardxalvarez/' target='_BLANK'>
        <Icon>
          <AiOutlineInstagram/>
          </Icon>
          </A>
          <A title='send me a email' href='mailto:ricardoandresalvarez62341@gmail.com' target='_BLANK'>
        <Icon>
          <AiOutlineMail/>
        </Icon>
          </A>
        <A title='linkedin' href='https://www.linkedin.com/in/ricardo-alvarez-0a27471bb/ 'target='_BLANK'>
        <Icon>
          <AiOutlineLinkedin/>
        </Icon>
      </A>
        <A title='github' href='https://github.com/ricardxalvarez' target='_BLANK'>
        <Icon>
          <AiFillGithub/>
        </Icon>
      </A>
      </Icons>
    </Container>
  )
}

export default Footer
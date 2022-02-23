import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { little } from '../responsive'
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90vw;
margin: 100px auto;
`
const Item = styled.div`
width: 22rem;
height: 7rem;
background-color: white;
margin: 0 10px;
margin-bottom: 20px;
border-radius: 5px;
box-shadow: -5px 10px 10px rgba(0,0,0,0.2);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
${little({
    width: '19rem'
})}
`
const Title = styled.h1`
font-size: 25px;
margin-bottom: 5px;
`
const Desc = styled.p`
margin-top: 5px;
`
const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`
const TitleCont = styled.div`
margin-bottom: 50px;
`
const Top = styled.h1`
font-size: 50px;
font-weight: 300;
letter-spacing: 0.1rem;
`
const S = styled.span`
color: #1268b2;
`
const Icon = styled.div`
width: 40px;
height: 40px;
background-color: #c8e5e1;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
border-radius: 50%;
position: absolute;
top: 10px;
left: 10px;
`
const A = styled.a`
color: black;
text-decoration: none;
&:hover{
    color: blue;
}
`
const Contact = () => {
    const {closeSubmenu} = useGlobalContext()
    return (
        <Container onMouseOver={closeSubmenu}>
            <TitleCont>
                <Top><S>C</S>ontact <S>I</S>nfo</Top>
            </TitleCont>
        <Wrapper>
            <Item>
                <Icon>
                    <AiOutlinePhone/>
                </Icon>
                <Title>Phone</Title>
                <Desc>+58 412-071.36.71</Desc>
            </Item>
            <Item>
                <Icon>
                    <AiOutlineMail/>
                </Icon>
                <Title>Email</Title>
                <Desc><A href='mailto:ricardoandresalvarez62341@gmail.com'>ricardoandresalvarez62341@gmail.com</A></Desc>
                <Desc><A href='mailto:ricardoandresalvarez62341@Outlook.com'>ricardoandresalvarez62341@Outlook.com</A></Desc>
            </Item>
            <Item>
                <Icon>
                    <GoLocation/>
                </Icon>
                <Title>Address</Title>
                <Desc>Venezuela, Carabobo</Desc>
            </Item>
        </Wrapper>
    </Container>
  )
}

export default Contact
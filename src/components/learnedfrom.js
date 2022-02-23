import React from 'react'
import styled from 'styled-components'
import { courses } from '../data'
import {BiLinkExternal} from 'react-icons/bi'
import {mobile} from '../responsive'
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px;
`
const Top = styled.div`
display: flex;
flex-direction: column;
`
const TopTitle = styled.h1`
font-size: 50px;
font-weight: 300;
letter-spacing: 0.1rem;
margin-bottom: 50px;
`
const Components = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;

`
const Item = styled.div`
display: flex;
flex-direction: column;
background-color: white;
margin: 5px ;
width: 400px;
padding: 5px 10px;
border-radius: 5px;
box-shadow: -5px 5px 10px rgba(0,0,0,0.2);
position: relative;
${mobile({
  width: '300px'
})}
`
const Title = styled.h3`
width: 90%;
`
const A = styled.a`
margin: 5px 0;
text-decoration: none;
color: #1268b2;
`
const Given = styled.p``
const S = styled.span`
color: #1268b2;
`
const Icon = styled.div`
background-color: #c8e5e1;
border-radius: 50%;
width: 35px;
height: 35px;
position: absolute;
right: 5px;
display: flex;
align-items: center;
justify-content: center;
`
const LearnedFrom = () => {
  return (
    <Container>
        <Top>
            <TopTitle>Cou<S>r</S>ses</TopTitle>
        </Top>
        <Components>
            {
                courses.map((course,index)=>{
                    const {title, link, given} = course
                    return (<Item key={index}>
                        <Title>{title}</Title>
                        <Icon>
                        <A href={link}>
                            <BiLinkExternal/>
                        </A>
                        </Icon>
                        <Given>- {given}</Given>
                    </Item>)
                })
            }
        </Components>
    </Container>
  )
}

export default LearnedFrom
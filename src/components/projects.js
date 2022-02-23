import React, { useState } from 'react'
import { useGlobalContext } from '../context';
import styled from 'styled-components';
import { projects } from '../data';
import {AiFillGithub} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'
import {mobile} from '../responsive'
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const TitleContainer = styled.div`
text-align: center;
padding: 0 20px;
`
const Title = styled.h1`
margin-bottom: 10px;
font-size: 50px;
font-weight: 300;
letter-spacing: 0.1rem;
`
const Bio = styled.p``
const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 20px;
justify-content: space-evenly;
`
const Span = styled.span`
color: #1268b2;
`
const ItemContainer = styled.div`
display: flex;
flex-direction: column;
background-color: #1268b2;
margin: 10px;
width: 400px;
border-radius: 5px;
box-shadow: -5px 10px 10px rgba(0,0,0,0.2);
color: #c8e5e1;
${mobile({
  width: '300px'
})}
`
const InfoContainer = styled.div`
padding: 10px 15px;
`
const ItemTitle = styled.h2``
const Desc = styled.p`
margin-top: 5px;
`
const Info = styled.div`
background-color: rgba(0,0,0,0.5);
width: 100%;
height: 100%;
position: absolute;
top: 0;
display: flex;
justify-content: center;
align-items: center;
border-radius: 0 0 5px 5px;
opacity: 0;
transition: all 0.3s ease;
`
const ImgContainer = styled.div`
position: relative;
&:hover ${Info}{
  opacity:1;
}
`
const Img = styled.img`
width: 100%;
height: 15rem;
object-fit: cover;
`
const Read = styled.button`
background-color: transparent;
border: none;
color: lightcoral;
font-weight: 900;
`
const InfoItem = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
transition: all 0.3s ease;
cursor: pointer;

&:hover{
transform: scale(1.1);
}
`
const A = styled.a``
const Projects = () => {
    const {closeSubmenu} = useGlobalContext()
    const [readMore, setReadMore] = useState(false)

  return (
    <Container onMouseOver={closeSubmenu}>
        <TitleContainer>
            <Title>PRO<Span>J</Span>ECTS</Title>
            <Bio>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas nihil eum nesciunt magni veniam. Doloribus delectus perferendis veritatis molestiae, illo sed corrupti dolor provident? Deleniti, exercitationem. Ipsam assumenda illum rem?</Bio>
        </TitleContainer>
        <Wrapper>
            {
                projects.map((item)=>{
                    const {img, title, link, desc, github, id} = item
                    return (
                        <ItemContainer key={id}>
                            <InfoContainer>
                                <ItemTitle>{title}</ItemTitle>
                                <Desc>{readMore? desc : `${desc.substring(0,150)}... `}
                                <Read onClick={()=> setReadMore(!readMore)}>{readMore? 'Show Less': 'Read More'}</Read>
                                </Desc>
                            </InfoContainer>
                            <ImgContainer>
                            <Img src={img}/>
                            <Info>
                                    <A href={link} target='_BLANK'>
                                <InfoItem>
                                    <CgWebsite style={{color: 'black', fontSize:'25px'}} title='WebSite'/>
                                    </InfoItem>
                                    </A>
                                    <A href={github} target='_BLANK'>
                                <InfoItem>
                                    <AiFillGithub style={{color: 'black', fontSize:'25px'}} title='Repo'/>
                                </InfoItem>
                                    </A>
                            </Info>
                            </ImgContainer>

                        </ItemContainer>
                    )
                })
            }
        </Wrapper>
    </Container>
  )
}

export default Projects
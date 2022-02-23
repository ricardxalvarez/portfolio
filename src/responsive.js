import { css } from "styled-components";

export const mobile = (props)=>{
    return css`
    @media only screen and (max-width: 830px){
        ${props}
    }
    `
}

export const little = (props)=>{
    return css`
    @media only screen and (max-width: 370px){
        ${props}
    }
    `
}
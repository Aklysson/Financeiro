import styled from 'styled-components' 

export const Container = styled.div`
 max-width: 1120px;
 padding: 15px 0px; 
 margin: 20px auto;

 background: white;
 box-shadow: 0px 0px 5px #ccc;
 border-radius: 5px;
 
 display: flex;
 justify-content: space-around;
 align-items: center;
 gap: 10px;

 @media (max-width: 767px) {
    display: grid;
 }
`

export const InputContent = styled.div`
display: flex;
flex-direction: column;`

export const Input = styled.div`
    outline: none;
    border-radius: 5px;
    font-size: 15px;
`

export const RadioGroup = styled.div`
display: flex;
align-items: center;

    input{
        margin-left: 20px;
        margin-right: 5px;
        accent-color: black;
        margin-top: 0;
    }
`

export const Button = styled.div`
padding: 5px 10px;
border: none;
border-radius: 5px;
cursor: pointer;
color: white;
background-color: teal;
`

export const Label = styled.div``

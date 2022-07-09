import styled from 'styled-components' 

export const Container = styled.div`
 max-width: 1120px;
 padding: 2rem 0px; 
 margin: 2rem auto;

 background: white;
 box-shadow: 0px 0px 5px #ccc;
 border-radius: 5px;
 
 display: flex;
 justify-content: space-around;
 gap: 1rem;
`

export const InputContent = styled.div`
display: flex;
flex-direction: column;`

export const Input = styled.div`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
`

export const RadioGroup = styled.div`
display: flex;
align-items: center;

    input{
        margin-left: 20px;
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

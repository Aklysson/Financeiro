import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

*{
        margin: 0 ;
        padding: 0;
        box-sizing: border-box;
        
    }

    body{
        background: #e5e5e5;
        font-family: 'Roboto', sans-serif;
    }

    html{
         @media  (max-width:1080px) {
             font-size:93.75%;
         }

         @media (max-width:720px) {
             font-size: 8
         }
     }




`
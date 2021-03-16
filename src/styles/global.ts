import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --red:#E52E4D;
    --blue:#5429CC;

    --blue-light:#6933FF;

    --text-title:#363F5F;
    --text-body:#969CB3;

    --background:#f0f2f5;
    --shape:#FFFFFF;
}
 * {
     margin:0;
     padding:0;
     box-sizing:border-box;
 }
 //font-size:16px (Desktop)
 html{
     @media(max-width:1080px){
         font-size:93.75%//==15px, but if we use px, will be fixed for the user, with percentage will adapt
     }
     @media(max-width:720px){
         font-size:87.5%//14px
     }//this medias is for the REM = 1rem = font-size defined(16 px === 1 rem for the desktop)
 }
 body {
     background:var(--background);
     -webkit-font-smoothing:antialiased;
 }

 button {
     cursor: pointer;
 }
[disabled]{
    opacity:0.6;
    cursor:not-allowed;
}
`;
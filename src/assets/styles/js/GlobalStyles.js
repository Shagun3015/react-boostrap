import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: 'Montserrat', sans-serif;
  }
  a{
    color: #ff8a23;
    font-size: 13px;
    text-decoration:none;
}
.required .form-label:after, .required a:after {
  content:"*";
  color:red;
}
  label{
    font-size: 14px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #111247;

}

    .btn-orange {
        background-color: #ff8a23;
        padding: 10px;
        text-transform: uppercase;
        border: 1px solid #ff8a23;
        color: #fff;
        border-radius: 8px;
        height: 50px;
        font-weight:bold;
    }

`;
 
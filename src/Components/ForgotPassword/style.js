import Styled from 'styled-components';
let ForgotPasswordWrap = Styled.div`
.broker-login{
    padding: 70px 30px;

    h2{
        color: #111247;
        font-size: 32px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.7px;
        margin-bottom:50px;
    }
    .form-control{
        border: 1px solid #111247;
        border-radius: 80px;
        box-shadow: none;
        font-size: 15px;
        line-height: 16px;
        padding: 10px 20px;
        color: #111247;
        height: 40px;
    }
    .btn-orange {
        width: auto;
        padding: 10px 20px;
    }
    .form-text{
        text-align:center;
        margin-bottom:20px;
        color: #111247;
        font-size:14px;
        .link-text{
            color: #ff8a23;
            font-size: 12px;
        }
    }
    .terms-text{
     font-size:13px;
     color:#989898;
     a{
        font-weight: bold;
        font-size:16px;
        padding: 5px;
     }
    }
}

`; 
export default ForgotPasswordWrap;
import Styled from 'styled-components';
let SignUpFormWrap = Styled.div`
.broker-signup{

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
    
    .btn-orange {
        width: 261px;
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
    .nav-link{
        color: #111247;
        font-size: 18px;
        text-decoration:none;
        margin: 5px 0;
    }
    .nav-link.active{
        color: #ff8a23;
        font-weight:bold;
        border-left: 5px solid #ff8a23;
    }

}

`; 
export default SignUpFormWrap;
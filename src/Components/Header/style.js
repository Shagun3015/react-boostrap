import Styled from 'styled-components';
import searchIcon from "../../assets/images/search.svg";
let HeaderWrap = Styled.div`
.seach-btn{
    background: url(${searchIcon});
    background-repeat: no-repeat;
    border:transparent;
    height:22px;
    position:absolute;
    right:22px;
    top:6px;
}
.navbar-header{
    flex-grow:inherit;
}
.navbar-header form{
    position:relative;
}
.navbar-header .navbar-nav{
    align-items:center;
}
.header-search{
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 18px;
    opacity: 0.2;
    height: 35px;
    padding-right: 40px;
}
.multi-menu-link{
    color:$indigo;
}
`; 
export default HeaderWrap;
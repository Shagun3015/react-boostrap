import React from 'react';
import {GlobalStyles} from './assets/styles/js/GlobalStyles';
import './App.css';
// import LeftBar from "./Components/LeftBar/LeftBar";
import TopHeader from "./Components/Header/TopHeader";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
let App = () => {
  return (
    <>
      <GlobalStyles />
      <TopHeader/>
    {/* <LeftBar/>  */}
      <Login/>
      <ForgotPassword/>
      <SignUp/>
    </>
  );
}

export default App;

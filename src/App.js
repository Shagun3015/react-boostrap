import React from 'react';
import './App.css';
import {Container, Navbar} from "react-bootstrap";
import LeftBar from "./Components/LeftBar";

let App = () => {
  return (
    <>
      <Navbar bg="warning" expand="lg" variant='light'>
        <Container>
        <Navbar.Brand href="#home">Hashching</Navbar.Brand>
        </Container>
      </Navbar>

      <LeftBar/>
    </>
  );
}

export default App;

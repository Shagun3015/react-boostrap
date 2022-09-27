import React from 'react';
import { Container, Navbar, Form, Nav, Button } from "react-bootstrap";
import HeaderWrap from "./style";
import hashchinglogo from "../../assets/images/hashching-logo.png";
import emailIcon from "../../assets/images/email-icon.svg";
import notificationIcon from "../../assets/images/notification-icon.svg";
import userIcon from "../../assets/images/user-icon.png";
let TopHeader = () => {
  return (
    <HeaderWrap>
      <Navbar bg="dark" expand="lg" variant='dark'>
        <Container fluid>
          <Navbar.Brand href="#home" className='mx-auto'>
            <img alt="Hashching" fluid className='navbar-brand-img rounded mx-auto d-block' src={hashchinglogo} />
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="navbar-header">
            <Nav className="my-2 my-lg-0 justify-content-end" navbarScroll>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder=""
                  className="me-2 header-search"
                  aria-label="Search"
                />
                  <Button variant="outline-success" className='seach-btn'></Button>
              </Form>
              <Nav.Link href="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-grid-fill multi-menu-link" viewBox="0 0 16 16">
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
              </svg></Nav.Link>
              <Nav.Link href="/"><img src={notificationIcon} /></Nav.Link>

              <Nav.Link href="/"><img src={emailIcon} /></Nav.Link>

              <Nav.Link href="/"><img src={userIcon} width="24"/></Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderWrap>
  )
};

export default TopHeader;

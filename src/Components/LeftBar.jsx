import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import ListGroup from 'react-bootstrap/ListGroup';

import { Container } from "react-bootstrap";
let LeftBar = () => {
return(
    <>
    <Container fluid>
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={3}>
          <ListGroup  variant="flush">
            <ListGroup.Item action href="#link1">
              Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Link 2
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              Link 3
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              Link 4
            </ListGroup.Item>
            <ListGroup.Item action href="#link5">
              Link 5
            </ListGroup.Item>
            <ListGroup.Item action href="#link6">
              Link 6
            </ListGroup.Item>
            <ListGroup.Item action href="#link7">
              Link 7
            </ListGroup.Item>
            <ListGroup.Item action href="#link8">
              Link 8
            </ListGroup.Item>
            <ListGroup.Item action href="#link9">
              Link 9
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={9}>
        <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
      </Container>
    </>
)
};
export default LeftBar;
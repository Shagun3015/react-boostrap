import React, { useState } from "react";
import { Container, Form, Button, Tab, Nav } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Typeahead } from 'react-bootstrap-typeahead';
import options from './data';
import SignUpFormWrap from "./style";
let SignUp = () => {
    const [selected, setSelected] = useState([]);
    return (
        <>
            <SignUpFormWrap>
                <Container className="broker-signup">
                    <Tab.Container id="left-tabs" defaultActiveKey="personalinfo">
                        <Row className="justify-content-md-center">
                            <Col sm={3}>
                                <Nav className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="personalinfo">Personal Info</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="professionalinfo">Professional Info</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="businessinfo">Business Info</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={7}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="personalinfo">
                                        <Form>
                                            <Row>
                                                <Col sm={6}>
                                                    <Form.Group className="mb-3 required">
                                                        <Form.Label>First name</Form.Label>
                                                        <Form.Control type="text" placeholder="" defaultValue="" required/>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3 required">
                                                        <Form.Label>Business Email </Form.Label>
                                                        <Form.Control type="email" placeholder="" required/>
                                                    </Form.Group>
                                                </Col>
                                                <Col sm={6}>
                                                    <Form.Group className="mb-3 required">
                                                        <Form.Label>Last name</Form.Label>
                                                        <Form.Control type="text" placeholder="" defaultValue="" required />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3 required">
                                                        <Form.Label>Zip</Form.Label>
                                                        <Form.Control type="text" placeholder="" name="zip" required />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={8}>
                                                    <Form.Group className="mb-3 required">
                                                    <Form.Label>Servicing Area</Form.Label>
                                                        <Typeahead id="basic-example" onChange={setSelected} options={options} placeholder="" selected={selected} required>
                                                        </Typeahead>
                                                    </Form.Group>
                                                </Col>
                                                <Col sm={4}>
                                                    <Form.Group className="mb-3 required">
                                                    <Form.Label>Radius</Form.Label>
                                                    <Form.Select aria-label="Radius" required>
                                                        <option>+ 15 km</option>
                                                        <option value="20">+ 20 km</option>
                                                        <option value="25">+ 25 km</option>
                                                        <option value="30">+ 30 km</option>
                                                        <option value="35">+ 35 km</option>
                                                        <option value="40">+ 40 km</option>
                                                        <option value="45">+ 45 km</option>
                                                        <option value="50">+ 50 km</option>
                                                        <option value="55">+ 55 km</option>
                                                        <option value="60">+ 60 km</option>
                                                        <option value="65">+ 65 km</option>
                                                        <option value="70">+ 70 km</option>
                                                        <option value="75">+ 75 km</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                                <Col sm={12}>
                                                <Form.Group className=" text-center">
                                                    <Button variant="primary" type="submit" className="btn-orange mb-4">
                                                    Register Profile
                                                    </Button>
                                                </Form.Group>
                                                </Col>
                                            </Row>
                                        </Form>

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="professionalinfo">
                                        <p>And make me travel forth without my cloak, To let base clouds o'ertake me in my way, Hiding thy bravery in their rotten smoke? 'Tis not enough that through the cloud thou break, To dry the rain on my storm-beaten face, For no man well of such a salve can speak, That heals the wound, and cures not the disgrace: Nor can thy shame give physic to my grief; Though thou repent, yet I have still the loss:</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="businessinfo">
                                        <p>And make me travel forth without my cloak, To let base clouds o'ertake me in my way, Hiding thy bravery in their rotten smoke? 'Tis not enough that through the cloud thou break, To dry the rain on my storm-beaten face, For no man well of such a salve can speak, That heals the wound, and cures not the disgrace: Nor can thy shame give physic to my grief; Though thou repent, yet I have still the loss:</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </SignUpFormWrap>
        </>
    )
};
export default SignUp;
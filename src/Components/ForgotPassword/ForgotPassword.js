import React from "react";
import { Container, Form, Button} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ForgotPasswordWrap from "./style";
let Login = () => {
    return (
        <>
         <ForgotPasswordWrap>
            <Container>
                <Row>
                <Col xs={12} sm={12} md={8} lg={5} className="broker-login mx-auto">
                <Form>
                <h2 className="text-center">Lost Password</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className=" text-center">
                    <Button variant="primary" type="submit" className="btn-orange mb-4">
                   Get New Password
                    </Button>
                    </Form.Group>
                    <Form.Text className="terms-text">
                   <a href="/privacy" target="_blank">Sign In </a> | <a href="/terms-conditions" target="_blank"><nobr>Register</nobr></a>.
                    </Form.Text>
                   
                    </Form>
                </Col>
                </Row>
            </Container>
        </ForgotPasswordWrap>
        </>
    )
};
export default Login;
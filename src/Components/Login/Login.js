import React from "react";
import { Container, Form, Button} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginFormWrap from "./style";
let Login = () => {
    return (
        <>
         <LoginFormWrap>
            <Container>
                <Row>
                <Col xs={12} sm={12} md={8} lg={6} className="broker-login mx-auto">
                <Form>
                <h2 className="text-center">Hashching Broker Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" className="label-checkbox"/>
                        <Form.Text className="float-right mt-0"><a href="/sign-in" className="link-text">Forgot your password?</a></Form.Text>
                    </Form.Group>
                    <Form.Group className=" text-center">
                    <Button variant="primary" type="submit" className="btn-orange mb-4">
                    LOGIN
                    </Button>
                    </Form.Group>
                    <Form.Text className="terms-text">
                    By proceeding, you agree to our <a href="/privacy" target="_blank">Privacy Policy</a> and <a href="/terms-conditions" target="_blank"><nobr>Terms of Use</nobr></a>.
                    </Form.Text>
                    <Form.Text>
                    Don't have an account yet? <a className="lnk_register" href="https://dev.hashching.co.uk/broker/broker-registration"> Register here</a>
                    </Form.Text>
                    <Form.Text>
                    Are you a borrower looking for help? <a className="lnk_register" href="https://dev.hashching.co.uk/category/loans/home-loan/questions"> Ask our brokers</a>
                    </Form.Text>
                    </Form>
                </Col>
                </Row>
            </Container>
        </LoginFormWrap>
        </>
    )
};
export default Login;
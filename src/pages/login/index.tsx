import React, { useRef, useState } from "react";
import { Button, Container, Row, Col, Form, FormCheck, ButtonGroup, Modal} from 'react-bootstrap';
import { loginRequest } from "../../store/auth/actions";
import { connect } from "react-redux";
import { useRouter } from 'next/router'

const mapDispatchToProps = (dispatch: any) => ({
    login: (params: any) => dispatch(loginRequest(params)),
});

const Login = (props: any) => {
    const router = useRouter();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [showModel, setShowModel] = useState(false);
    const handleCloseModel = () => {
        router.push('/', undefined, { shallow: true });
        setShowModel(false)
    };

    const callback = (data: any) => {
        console.log("Inside callback after login");
        setShowModel(true)
    };
    
    const login = () => {
        let data: any = {
            values: {
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
            },
            callback,
        };
        props.login(data);
    };

    return (
        <Container>
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Email address</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="name@example.com" name="email" id="floatingInput" ref={emailRef} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Password</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <FormCheck>
                    <FormCheck.Input type={'checkbox'} />
                    <FormCheck.Label>Remember me</FormCheck.Label>

                </FormCheck>
                <ButtonGroup className="mb-3">
                    <Button variant="primary" 
                    onClick={() => {
                        login();
                    }}>Sign in</Button>
                    <Button
                            variant="primary"
                            onClick={() => { router.push('/', undefined, { shallow: true }) }}
                        >Go To Index</Button>
                </ButtonGroup>
            </Form>
            <Modal show={showModel} onHide={handleCloseModel}>
                <Modal.Header closeButton>
                <Modal.Title>Suscess</Modal.Title>
                </Modal.Header>
                <Modal.Body>Sign in suscess!!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModel}>
                    OK
                </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default connect(null, mapDispatchToProps)(Login);
import React, {useState} from 'react';
import {Container, Button, Col, Form, Row} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {onSignUp} from "../services/UserService";


const SignUpComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = async () => {
        try {
            const requestData = {
                name: name,
                email: email,
                password: password,
            };
            console.log(requestData);

            await onSignUp(requestData);

            console.log('Conta criada com sucesso');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Container className="p-0">
            <Form onSubmit={signUp}>
                <Form.Group className='mt-5'>
                    <Row>
                        <Col lg={6}>
                            <h4><strong>Dados do Usuário</strong></h4>

                            <Form.Group as={Row} className='mb-2'>
                                <Form.Label column lg='3' md='4'>
                                    Nome do Usuário
                                </Form.Label>
                                <Col lg={9} md={8}>
                                    <Form.Control value={name} onChange={(e) => setName(e.target.value)}
                                                  placeholder='insira seu nome'/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className='mb-2'>
                                <Form.Label column lg='3' md='4'>
                                    Email
                                </Form.Label>
                                <Col lg={9} md={8}>
                                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)}
                                                  placeholder='insira seu email'/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2'>
                                <Form.Label column lg='3' md='4'>
                                    Senha
                                </Form.Label>
                                <Col lg={9} md={8}>
                                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)}
                                                  type='password' placeholder='insira sua senha'/>
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Button type='submit' variant='dark' >
                                    Finalizar Cadastro
                                </Button>
                            </Form.Group>
                            <Form.Group>
                                <Link className="d-grid gap-2 mt-4 text-decoration-none" to='/login'>
                                    <Button type='submit' variant='outline-dark'>
                                        cancelar
                                    </Button>
                                </Link>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </Container>

    )
}
export {SignUpComponent}

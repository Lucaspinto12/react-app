import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {useState} from "react";
import {onSignIn} from "../services/UserService";

const SignInComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signIn = async (event) => {
        event.preventDefault();
        try {
            const requestData = {
                username: email,
                password: password,
            };

            await onSignIn(requestData);
            history.push('/home');
            console.log('Logado');
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <Form onSubmit={signIn} className='mt-5'>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Body>
                            <Form.Group>
                                <Form.Label htmlFor='txtLogin'>Email</Form.Label>
                                <Form.Control
                                    type='text'
                                    className='form-control'
                                    id='txtLogin'
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className='mt-3'>
                                <Form.Label htmlFor='txtPassword'>Senha</Form.Label>
                                <Form.Control
                                    type='password'
                                    className='form-control'
                                    id='txtPassword'
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Button className="d-grid gap-2 mt-4" type='submit' variant='dark'>
                                    Entrar
                                </Button>
                            </Form.Group>
                            <Form.Group>
                                <Link className="d-grid gap-2 mt-4 text-decoration-none" to='/register'>
                                    <Button type='submit' variant='outline-dark'>
                                        Não tenho cadastro
                                    </Button>
                                </Link>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Form>
    );
}

export {SignInComponent}

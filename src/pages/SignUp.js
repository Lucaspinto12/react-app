import React from 'react';
import {Container} from "react-bootstrap";
import {SignUpComponent} from "../components/SignUpComponent";

const SignUp = () => {
    return (
        <Container>
            <SignUpComponent title={'title signup'} head='signup' />
        </Container>
    )
}

export default SignUp;

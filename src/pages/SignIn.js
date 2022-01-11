import React from 'react';
import {Container} from "react-bootstrap";
import {SignInComponent} from "../components/SignInComponent";

const SignIn = () => {
    return (
        <Container>
            <SignInComponent title={'title'} head='login' />
        </Container>
    )
}

export default SignIn;

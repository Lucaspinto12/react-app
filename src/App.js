import React from 'react';
import {Container} from "react-bootstrap";
import Routes from "./Routes";
import NavbarComponent from "./componentes/NavbarComponent";

function App() {
    return (
        <>
            <Container className="p-0">
                <NavbarComponent/>
                <Routes/>
            </Container>
        </>
    );
}

export default App;
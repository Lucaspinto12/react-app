import React from 'react';
import {Card, Container} from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";

const Home = () => {
    return (
        <Container>
            <NavbarComponent/>
            <Card className="mt-4" style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>BHUT - Treinamento</Card.Title>
                    <Card.Text>
                        Treinamento de NodeJs e ReactJs
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Home;

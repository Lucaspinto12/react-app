import {Container, Nav, Navbar} from "react-bootstrap";


const NavbarComponent = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">BHUT</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/car">Carros</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../scss/NavBar.scss';
import Section from '../assets/Data/Section.json';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = () => {
    return (
        <Navbar className="NavBar" expand="md">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img className="brand" src="Images/logo.webp" alt="logo" />
                </Navbar.Brand>

                <Navbar.Offcanvas
                    id={`offCanvas`}
                    aria-labelledby={`offcanvasLabel`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="Nav_Section">
                            {Section.map((section) => (
                                <Nav.Link>{section}</Nav.Link>
                            ))}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

                <Nav>
                    <Nav.Link href="#deets">
                        <img
                            className="icon"
                            src="Images/Icons/searchIcon.png"
                            alt="Search"
                        />
                    </Nav.Link>
                    <Nav.Link href="#memes">
                        <img
                            className="icon"
                            src="Images/Icons/cartIcon.png"
                            alt="Cart"
                        />
                    </Nav.Link>
                    <Nav.Link href="#memes">
                        <img
                            className="icon"
                            src="Images/Icons/favoriteIcon.png"
                            alt="Cart"
                        />
                    </Nav.Link>
                </Nav>
                <Navbar.Toggle aria-controls="offCanvas" />
            </Container>
        </Navbar>
    );
};

export default NavBar;

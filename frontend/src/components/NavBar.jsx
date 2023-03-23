import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../scss/NavBar.scss';
import Section from '../assets/Data/Section.json';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BiSearch, BiCart } from 'react-icons/bi';
import { MdFavoriteBorder } from 'react-icons/md';
import { logo } from '../assets/img';

const NavBar = () => {
    return (
        <Navbar className="NavBar" expand="md">
            <Container fluid>
                <Navbar.Brand className="brand" href="/">
                    <img src={logo} alt="logo" />
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
                        <BiSearch className="icon" />
                    </Nav.Link>
                    <Nav.Link href="#memes">
                        <BiCart className="icon" />
                    </Nav.Link>
                    <Nav.Link href="#memes">
                        <MdFavoriteBorder className="icon" />
                    </Nav.Link>
                </Nav>

                <Navbar.Toggle aria-controls="offCanvas" />
            </Container>
        </Navbar>
    );
};

export default NavBar;

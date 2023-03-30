import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../scss/NavBar.scss';
import Data from '../assets/Data/NavBar.json';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BiSearch, BiCart } from 'react-icons/bi';
import { MdFavoriteBorder } from 'react-icons/md';
import { logo } from '../assets/img';

const NavBar = () => {

    return (
        <Navbar className="NavBar" expand="md" collapseOnSelect>
            <Container fluid>
                <Link className="brand navbar-brand" to={'/'}>
                    <img src={logo} alt="logo" />
                </Link>

                <Navbar.Offcanvas
                    id={`offCanvas`}
                    aria-labelledby={`offcanvasLabel`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="Nav_Section">
                            {Data.map((data, i) => (
                                <NavLink
                                    className="nav-link"
                                    key={i}
                                    to={'/' + data.Name}
                                >
                                    {data.Show}
                                </NavLink>
                            ))}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

                <Nav>
                    <Nav.Link href="/">
                        <BiSearch className="icon" />
                    </Nav.Link>
                    <Nav.Link href="/">
                        <BiCart className="icon" />
                    </Nav.Link>
                    <Nav.Link href="/">
                        <MdFavoriteBorder className="icon" />
                    </Nav.Link>
                </Nav>

                <Navbar.Toggle aria-controls="offCanvas" />
            </Container>
        </Navbar>
    );
};

export default NavBar;

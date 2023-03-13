import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../scss/NavBar.scss'
import Section from '../assets/Data/Section.json'

function NavBar() {
  return (
    <Navbar className='NavBar' collapseOnSelect expand="md">
      <Container>
        <Navbar.Brand href="#home">
            <img src='Images/logo.webp' alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="Nav_Section">
            {Section.map((section)=>(
                <Nav.Link>{section}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <Nav>
            <Nav.Link href="#deets">
                <img className='icon' src="Images/Icons/searchIcon.png" alt="Search"/>
            </Nav.Link>
            <Nav.Link href="#memes">
              <img className='icon' src="Images/Icons/cartIcon.png" alt="Cart" />
            </Nav.Link>
            <Nav.Link href="#memes">
              <img className='icon' src="Images/Icons/favoriteIcon.png" alt="Cart" />
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
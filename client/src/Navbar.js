import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'

 
function TopNav() {
  return (
    <Navbar collapseOnSelect className='mx-auto px-5' expand="lg" sticky="top" style={{height: "50", fontFamily: 'Montserrat', fontWeight: 500}} >
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features"style={{fontSize: '22px'}}>Arts and Theater</Nav.Link>
            <Nav.Link href="#pricing" style={{fontSize: '22px'}}>Movies</Nav.Link> */}
            
          </Nav>
          <Nav>
          <NavDropdown title="Venues" style={{fontSize: '22px'}} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Sports Venues</NavDropdown.Item>
              <NavDropdown.Item href="">
              Dance Studios
              </NavDropdown.Item>
              <NavDropdown.Item href="">Wedding Venues</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">
                More
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#activities" style={{fontSize: '22px'}}>Activities</Nav.Link>
            <Nav.Link href="#sports" style={{fontSize: '22px'}}>Sports</Nav.Link>
            <Nav.Link eventKey={2} style={{fontSize: '22px'}} href="/Login">
              Login/Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNav;
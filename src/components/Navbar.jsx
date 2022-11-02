import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from "../assets/logo.png"

function Navbarr() {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

      
        <Container >
          <Navbar.Brand href="#home" className='leftHeading'>
            <img className='logo' src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{}}>
            <Nav className='rightItems'>
            <Nav.Link href="#">Home</Nav.Link>

              {/* <NavDropdown title="Home" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              {/* <NavDropdown title="Pages" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              <NavDropdown title="Blog" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Coming Soon</NavDropdown.Item>
                
              </NavDropdown>
              <Nav.Link href="#pricing">Contact</Nav.Link>
              <div className='verticalLine'>   </div>
              <a className="search px-5" href="#">
                <i className="fa fa-search" aria-hidden="true"></i>
              </a>
              <Button variant="danger" className='headerBtn rounded-pill px-4'>Quote Now</Button>{' '}
              <nav className='headerIcons'>
                <a href="#0">
                  <i className="fa fa-facebook px-2 none " aria-hidden="true"></i>
                </a>
                <a href="#0">
                  <i className="fa fa-twitter px-2 none " aria-hidden="true"></i>
                </a>
                <a href="#0">
                  <i className="fa fa-instagram px-2 none " aria-hidden="true"></i>
                </a>
                <a href="#0">
                  <i className="fa fa-linkedin px-2 none " aria-hidden="true"></i>
                </a>
              </nav>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Navbarr;
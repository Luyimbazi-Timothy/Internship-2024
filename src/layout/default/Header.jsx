import { Button, Image, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function ContainerInsideExample() {
  return (
    <Navbar expand="sm"
      className="bg-body-tertiary m-0"
    >
      <Container fluid>
        <Navbar.Brand className="fs-3 mb-0">
          <Link to="/" className='text-decoration-none' style={{color:"black"}}>
            <strong>Staff Appraisal Tracker</strong>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto align-items-center">
            <Nav.Item className="me-3 fw-bold">Welcome Derrick
            </Nav.Item>
            {/* <Nav.Link style={{ fontSize: "15px" }} href="/logout">
              <Button variant="light">Logout</Button>{' '}
            </Nav.Link> */}
            <NavDropdown drop='down-centered' title={
              <Image
              src="https://via.placeholder.com/40"
              roundedCircle
              style={{ width: '50px', height: '50px', border: '1px solid' }}
            />
            } id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
             
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;

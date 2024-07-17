import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ContainerInsideExample() {
  return (
    <Navbar expand="sm" 
    className="bg-body-tertiary m-0"
    >
      <Container fluid>
        <Navbar.Brand href="#" className="fs-1 mb-0">
          Staff Appraisal Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto align-items-center">
            <Nav.Item className="me-3 fw-bold">Welcome John
              <span>&nbsp;
              <Image
                  src="https://via.placeholder.com/40"
                  roundedCircle
                  style={{ width: '50px', height: '50px', border: '1px solid'}}
                />
              </span>
            </Nav.Item>
        
              <Nav.Link style={{fontSize:"15px"}} href="#action/3.3"><span>Logout</span></Nav.Link>
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;

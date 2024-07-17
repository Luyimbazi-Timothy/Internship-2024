import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function SideBar() {
  return (
    <div className='sidebar mt-2'>
      <div className="sidepanel-top">
        <Nav defaultActiveKey="/" className="flex-column">
          <Nav.Item>
            <Nav.Link href="/" className="text-white">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="#" className="text-white">Summary</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="sidepanel-footer d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: "", padding: 0 }}>
        <Image
          src="https://via.placeholder.com/40"
          roundedCircle
          style={{ width: '40px', height: '40px', border: '1px solid' }}
        />
        <div>Ahaabwe John</div>
      </div>

    </div>
  );
}

export default SideBar;

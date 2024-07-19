import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function SideBar() {
  const [activeKey, setActiveKey] = useState(window.location.pathname);

  return (
    <div className='sidebar mt-2' style={{ color: "white" }}>
      <div className="sidepanel-top">
        <Nav
          variant="pills"
          activeKey={activeKey}
          onSelect={(selectedKey) => setActiveKey(selectedKey)}
          className="flex-column"
        >
          <Nav.Item>
            <Nav.Link href="/" eventKey="/" className="text-white">
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/control-panel" eventKey="/control-panel" className="text-white">
              Control Panel
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {/* <div style={{ marginTop: "60vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image
            src="https://via.placeholder.com/40"
            roundedCircle
            style={{ width: '50px', height: '50px', border: '1px solid' }}
          />
          <div>
            <strong style={{color:"black"}}>Ahaabwe Derrick</strong>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;

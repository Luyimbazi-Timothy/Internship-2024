import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import SettingsIcon from '@mui/icons-material/Settings'
import DashboardIcon from '@mui/icons-material/Dashboard';


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
            <Nav.Link href="/dashboard" eventKey="/" className="text-white">
            <DashboardIcon/>Dashboard
            </Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link href="/control-panel" eventKey="/control-panel" className="text-white">
            <SettingsIcon/>Control Panel
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default SideBar;

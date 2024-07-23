// src/layout/fullPage/Layout.js
import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Routing from '../../router/Routing';
import Routing from '../../Router/Routing';
import SideBar from '../default/SideBar';
import Header from '../default/Header';
import { DisplaySidebarContext } from '../../Components/ContextHook/useDisplayContext';

function Layout() {
  const { displaySidebarPanel } = useContext(DisplaySidebarContext);

  return (
    <Container fluid>
      {/* First Row (Header) */}
      <Row style={{
        height: '5rem',
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: '#f8f9fa',
        zIndex: 100
      }}>
        <Col>
          <Header />
        </Col>
      </Row>

      <Row style={{ marginTop: '5rem' }}>
        {displaySidebarPanel && (
          <Col className='col-2 sidebar-col'>
            <SideBar />
          </Col>
        )}
        <Col style={{
          marginLeft: displaySidebarPanel ? '17%' : '0',
          backgroundColor: '#ffffff',
          marginTop: '10px',
          height: 'auto',
          overflowY: 'auto'
        }}>
          <Routing />
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;

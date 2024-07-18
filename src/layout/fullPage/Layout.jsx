// src/layout/fullPage/Layout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Routing from '../../Router/Routing';
import SideBar from '../default/SideBar';
import Header from '../default/Header';

function Layout() {
  return (
    <>
      <Container fluid>
        {/* First Row (Header) */}
        <Row style={{
          height: '5rem',
          position: 'fixed',
          top: 0,
          width: '100%',
          backgroundColor: '#f8f9fa',
          zIndex: 1
        }}>
          <Col>
            <Header />
          </Col>
        </Row>

        {/* Second Row (Content) */}
        <Row style={{ marginTop: '5rem' }}>
          <Col className='col-2' style={{
            position: 'fixed',
            left: 0,
            backgroundColor: 'blue',
            height: '100vh',
            overflowY: 'auto',
            whiteSpace: 'normal',
            wordWrap: 'break-word',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              flexGrow: 1,
            }}>
              <SideBar />
            </div>
          </Col>

          <Col style={{
            marginLeft: '20%',
            backgroundColor: '#ffffff',
            padding: '20px',
            height: 'auto',
            overflowY: 'auto'
          }}>
            <div style={{ height: 'auto' }}>
              <Routing />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;

import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Components/dashboard/Header';
import SideBar from './Components/dashboard/SideBar';
import Routing from './routes/Routing';



function App() {
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
              <Routing/>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

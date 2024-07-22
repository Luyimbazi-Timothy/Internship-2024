// src/layout/fullPage/Layout.js
<<<<<<< HEAD
import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Routing from '../../Router/Routing';
import SideBar from '../default/SideBar';
import Header from '../default/Header';
import { DisplaySidebarContext } from '../../Components/ContextHook/useDisplayContext';
=======
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Routing from "../../Router/Routing";
import SideBar from "../default/SideBar";
import Header from "../default/Header";
>>>>>>> 02f6c63a21f7dd18e890c33e9aec060a3a31d6a4

function Layout() {
  const { displaySidebarPanel } = useContext(DisplaySidebarContext);

  return (
<<<<<<< HEAD
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
=======
    <>
      <Container fluid>
        {/* First Row (Header) */}
        <Row
          style={{
            height: "5rem",
            position: "fixed",
            top: 0,
            width: "100%",
            backgroundColor: "#f8f9fa",
            zIndex: 100,
          }}
        >
          <Col>
            <Header />
          </Col>
        </Row>

        {/* Second Row (Content) */}
        <Row style={{ marginTop: "5rem" }}>
          <Col
            className="col-2"
            style={{
              position: "fixed",
              left: 0,
              backgroundColor: "#0693E3",
              height: "100vh",
              overflowY: "auto",
              whiteSpace: "normal",
              wordWrap: "break-word",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                flexGrow: 1,
              }}
            >
              <SideBar />
            </div>
          </Col>

          <Col
            style={{
              marginLeft: "17%",
              backgroundColor: "#ffffff",
              // padding: '20px',
              height: "auto",
              overflowY: "auto",
            }}
          >
            <div style={{ height: "auto" }}>
              <Routing />
            </div>
          </Col>
        </Row>
      </Container>
    </>
>>>>>>> 02f6c63a21f7dd18e890c33e9aec060a3a31d6a4
  );
}

export default Layout;

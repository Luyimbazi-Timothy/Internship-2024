import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button, ButtonGroup } from "@mui/material";
import TableHandler from "../AppraisalActivity/activityTableData/TableHandler";
function Dashboard() {
  const [activeTab, setActiveTab] = useState("Q1");
  const [tabDisplay, setTabDisplay] = useState(true);
  const [quartileFilter, setQuartileFilter] = useState("Q1");

  useEffect(() => {
    setQuartileFilter(activeTab);
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleDashBoardBtnDisplay = () => {
    setTabDisplay(!tabDisplay);
  };

  return (
    <Container className="mt-1">
      {tabDisplay ? (
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-around align-items-center">
              <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                {["Q1", "Q2", "Q3", "Q4"].map((quarter) => (
                  <Button
                    key={quarter}
                    sx={{ mx: 1, height: 70, marginY: 2, fontSize: 20, color: 'black', backgroundColor: activeTab === quarter ? "lightgray" : "primary.main" }}
                    onClick={() => handleTabClick(quarter)}
                  >
                    {quarter}
                  </Button>
                ))}
              </ButtonGroup>
            </div>
          </Col>
        </Row>
      ) : null}

      <Row>
        <TableHandler quartileFilter={quartileFilter} toggleDashBoardBtnDisplay={toggleDashBoardBtnDisplay} />
      </Row>
    </Container>
  );
}

export default Dashboard;

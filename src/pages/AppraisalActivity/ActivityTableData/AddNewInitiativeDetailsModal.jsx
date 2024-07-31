import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddNewInitiativeDetailsModal({displaySuccessMessage, measurableActivity, show, handleClose }) {
  return (
    <Modal size='lg' show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Activity : {measurableActivity} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              placeholder="Enter Date"
            />
          </Form.Group>
          <Form.Group controlId="formImplementations">
            <Form.Label>Implementations</Form.Label>
            <Form.Control
              as="textarea"
              style={{ height: '80px' }}
              name="implementations"
              placeholder="Enter Implementations"
            />
          </Form.Group>

          <Form.Group controlId="formComments">
            <Form.Label>Comments</Form.Label>
            <Form.Control
              as="textarea"
              name="comments"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
            />
          </Form.Group>

          <Form.Group controlId="formStakeholders">
            <Form.Label>Stakeholders</Form.Label>
            <Form.Control
              type="text"
              name="stakeholders"
              placeholder="Enter Stakeholders"
            />
          </Form.Group>

          <Form.Group controlId="formEvidence">
            <Form.Label>Evidence</Form.Label>
            <Form.Control
              type="file"
              name="evidence"
              placeholder="Enter Evidence"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => { handleClose(); displaySuccessMessage(); }}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddNewInitiativeDetailsModal;

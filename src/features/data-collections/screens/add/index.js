import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";

import ModalPhoneNumber from './phone';
import RelativeModal from './relative/modal-relative';
import RelativeTable from './relative';

import "react-datepicker/dist/react-datepicker.css";


const AddForm = ({ 
    show= false, 
    onCloseModal = () => {
        // this is intentional
    } 
}) => {

    const [startDate, setStartDate] = useState(new Date());
    const [modalPhoneNumber, setModalPhoneNumber] = useState(false);
    const [modalRelative, setModalRelative] = useState(false);

    return (
        <Modal
            show={show}
            onHide={onCloseModal}
            backdrop="static"
            keyboard={false}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Add new data</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEKTP">
                        <Form.Label>E-KTP</Form.Label>
                        <Form.Control type="text" placeholder="Enter your e-ktp" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formJob">
                        <Form.Label>Job</Form.Label>
                        <Form.Control type="text" placeholder="Enter your job" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDOB">
                        <Form.Label>Date of birth</Form.Label>
                        <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPhoneNumber">
                        <Form.Label>Phone number</Form.Label>
                        <Button variant="link" onClick={() => setModalPhoneNumber(true)}>+Add</Button>{' '}
                        <Form.Control type="text" placeholder="Add phone number" disabled />
                        <ModalPhoneNumber onHide={() => setModalPhoneNumber(false)} show={modalPhoneNumber}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPhoneNumber">
                        <Form.Label>Relative</Form.Label>
                        <Button variant="link" onClick={() => setModalRelative(true)}>+Add relative</Button>{' '}
                        <RelativeModal onHide={() => setModalRelative(false)} show={modalRelative} />
                        <RelativeTable />
                    </Form.Group>
                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCloseModal}>
                    Close
                </Button>
                <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </Modal>
    )
};

AddForm.propTypes = {
    show: PropTypes.bool,
    onCloseModal: PropTypes.func
}

export default AddForm;
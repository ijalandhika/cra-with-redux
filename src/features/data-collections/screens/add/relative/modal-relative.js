import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";

import { RelationshipStatus } from '../../../utils/relationship-status';


const ModalRelative = ({ 
    show = false, 
    onHide = () => {}
}) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Add relative</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter relative name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDOB">
                    <Form.Label>Date of birth</Form.Label>
                    <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formRelationship">
                    <Form.Label>Relationship status</Form.Label>
                    <Form.Select >
                        {
                            RelationshipStatus.map(e => <option value={e} key={e}>{e}</option>)
                        }
                    </Form.Select>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary">Add new relative</Button>
            </Modal.Footer>

        </Modal>
    )
};

ModalRelative.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func
}

export default ModalRelative;
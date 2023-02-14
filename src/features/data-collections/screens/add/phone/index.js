import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

const ModalPhone = ({ 
    show = false, 
    onHide = () => {},
    onAddPhoneNumber = () => {}
}) => {
    const [mobilePhone, setMobilePhone] = useState('');
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Add phone number</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="formphone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter phone number" 
                        onChange={(e) => {
                            setMobilePhone(e.target.value);
                        }}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => {
                    onAddPhoneNumber(mobilePhone, 'phoneNumber');
                    setMobilePhone('');
                    onHide();
                }}>Add new</Button>
            </Modal.Footer>

        </Modal>
    )
};

ModalPhone.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
    onAddPhoneNumber: PropTypes.func
}

export default ModalPhone;
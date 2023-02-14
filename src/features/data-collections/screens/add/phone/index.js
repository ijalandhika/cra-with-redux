import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

const ModalPhone = ({ 
    show = false, 
    onHide = () => {}
}) => {
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
                    <Form.Control type="text" placeholder="Enter phone number" />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary">Add new</Button>
            </Modal.Footer>

        </Modal>
    )
};

ModalPhone.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func
}

export default ModalPhone;
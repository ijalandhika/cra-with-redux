import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';

import ModalPhoneNumber from './phone';
import RelativeModal from './relative/modal-relative';
import RelativeTable from './relative';

import { add } from "../../actions/dataSlice";

import Input from "../../../../components/input";
import DatePicker from "../../../../components/date-picker";

import "react-datepicker/dist/react-datepicker.css";


const AddForm = ({ 
    show= false, 
    onCloseModal = () => {
        // this is intentional
    } 
}) => {
    const dispatch = useDispatch();

    const initialState =  {
        name: '', 
        ektp: '', 
        address: '', 
        job: '', 
        birthDate: '', 
        phoneNumber: [], 
        relativePerson: []
    }
    // eslint-disable-next-line no-unused-vars
    const [initialValues, setInitialValues] = useState(initialState);

    const {
        register,
        handleSubmit,
        getValues,
        // watch,
        control,
        formState: { errors },
        setValue
      } = useForm({
        mode: "onTouched",
        reValidateMode: "onSubmit",
        // reValidateMode: "onChange",
        defaultValues: initialValues
      });

    

    const [modalPhoneNumber, setModalPhoneNumber] = useState(false);
    const [modalRelative, setModalRelative] = useState(false);

    const onSubmit = (values) => {
        values.birthDate = values.birthDate.toString();
        dispatch(add(values));
        onCloseModal();
    };

    const onError = (error) => {
        console.log("ERROR:::", error);
    };

    const onAddAttribute = (newValue, stateName) => {
        const currentValue = getValues(stateName);
        currentValue.push(newValue);
        setValue(stateName, currentValue);
    }

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
            
            <Form onSubmit={handleSubmit(onSubmit, onError)}>
                <Modal.Body>
                    <Input 
                        register={register}
                        errors={errors}
                        type="text"
                        label="Name"
                        name="name"
                    />
                    <Input 
                        register={register}
                        errors={errors}
                        type="text"
                        label="E-KTP"
                        name="ektp"
                    />
                    <Input 
                        register={register}
                        errors={errors}
                        type="text"
                        label="Job"
                        name="job"
                    />
                    <DatePicker control={control} />
                    <Input 
                        register={register}
                        errors={errors}
                        type="text"
                        as="textarea"
                        label="Address"
                        name="address"
                    />
                    
                    <Form.Group className="mb-3" controlId="formPhoneNumber">
                        <Form.Label>Phone number</Form.Label>
                        <Button variant="link" onClick={() => setModalPhoneNumber(true)}>+Add</Button>{' '}
                        <Form.Control type="text" placeholder="Add phone number" disabled value={(getValues('phoneNumber') || []).join(',')}/>
                        <ModalPhoneNumber 
                            onHide={() => setModalPhoneNumber(false)} 
                            show={modalPhoneNumber}
                            onAddPhoneNumber={onAddAttribute}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPhoneNumber">
                        <Form.Label>Relative</Form.Label>
                        <Button variant="link" onClick={() => setModalRelative(true)}>+Add relative</Button>{' '}
                        <RelativeModal onHide={() => setModalRelative(false)} show={modalRelative} onAddRelative={onAddAttribute} />
                        <RelativeTable data={getValues('relativePerson')}/>
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">Add</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
};

AddForm.propTypes = {
    show: PropTypes.bool,
    onCloseModal: PropTypes.func
}

export default AddForm;
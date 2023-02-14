import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import AddForm from './add';

import { datas } from '../actions/dataSlice';


const ListData = () => {
    const theAppData = useSelector(datas) || [];

    const [showModal, setShowModal] = useState(false);

    return (
        <Container>
            <Stack gap={2}>
                <Row>
                    <Col><Button onClick={() => setShowModal(true)}>Add new data</Button></Col>  
                </Row>
                <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            theAppData.map((value, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{value.name}</td>
                                    <td>{value.job}</td>
                                    <td>{value.phoneNumber.join(",")}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                </Row>
            </Stack>
            <AddForm show={showModal} onCloseModal={() => setShowModal(false)} />
    </Container>
        
    )
};

export default ListData;
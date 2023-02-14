import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';


const RelativeTable = ({ data = [] }) => {

    return (
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date of birth</th>
            <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((v, i) => (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{v.name}</td>
                        <td>{v.dob.toString()}</td>
                        <td>{v.status}</td>
                    </tr>
                ))
            }
        </tbody>
        </Table>
    )
};


RelativeTable.propTypes = {
    data: PropTypes.array
}

export default RelativeTable;
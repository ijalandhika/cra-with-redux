import Form from 'react-bootstrap/Form';
import { Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import PropTypes from 'prop-types';


const DatePicker = ({
    control
}) => {
    return (
        <Controller
            control={control}
            name="birthDate"
            rules={{ required: true }} //optional
            render={
            ({
                field: { onChange, name, value },
                formState: { errors }, //optional, but necessary if you want to show an error message
            }) => (
                <Form.Group className="mb-3" controlId="formDOB">
                    <Form.Label>Date of birth</Form.Label>
                    <ReactDatePicker 
                        className="form-control" 
                        selected={
                            value ? new Date(value) : null
                        }
                        onChange={(date) => {
                            onChange(date);
                        }}
                    />
                    {errors && errors[name] && (
                        <Form.Text className="text-danger">
                            Date of birth is required
                        </Form.Text>
                    )}
                </Form.Group>
            )
            }

        />
    )
};

DatePicker.propTypes = {
    control: PropTypes.object.isRequired
}


export default DatePicker;
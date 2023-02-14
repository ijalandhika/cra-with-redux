import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';


const Input = ({ 
    register, 
    errors, 
    type, 
    name,
    label,
    as= ''
}) => {
    const p = {
        placeholder: `Enter your ${name}`
    };

    if (as) {
        p.as = as;
    }else {
        p.type = type;
    }

    return (
        <Form.Group className="mb-3" controlId={`form${name}`}>
            <Form.Label>{label}</Form.Label>
            <Form.Control 
                {...p}
                {...register(name, { required: `${name} is required` })}
            />
            {errors[name] && (
                <Form.Text className="text-danger">
                {errors[name].message}
                </Form.Text>
            )}
        </Form.Group>
    )
};

Input.propTypes = {
    register: PropTypes.func.isRequired, 
    errors: PropTypes.object.isRequired, 
    type: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    as: PropTypes.string
}

export default Input;


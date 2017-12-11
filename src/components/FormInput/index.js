import React from 'react';
import PropTypes from 'prop-types';

const FormInput = props =>
	// eslint-disable-next-line jsx-a11y/label-has-for
	<label>
		{props.label && <span>{props.label}</span>}
		<input {...props} type={props.type} />
	</label>;

FormInput.defaultProps = {
	type: 'text',
	label: undefined
};

FormInput.propTypes = {
	type: PropTypes.oneOf(['text', 'email', 'number', 'tel']),
	label: PropTypes.string
};

export default FormInput;

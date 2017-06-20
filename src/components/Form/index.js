import React from 'react';
import PropTypes from 'prop-types';

const Form = props =>
	<form data-ts="Form" {...props}>
		{props.children}
	</form>;

Form.defaultProps = {
	children: []
};

Form.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default Form;

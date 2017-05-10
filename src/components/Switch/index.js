import React from 'react';
import PropTypes from 'prop-types';

const Switch = ({ id, label, checked, disabled, readOnly }) => (
	<label htmlFor={id}>
		<span>{label}</span>
		<input type="checkbox" id={id} checked={checked} disabled={disabled} readOnly={readOnly} />
	</label>
);

Switch.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool
};

Switch.defaultProps = {
	id: 'swich',
	label: '',
	checked: false,
	disabled: false,
	readOnly: false
};

export default Switch;

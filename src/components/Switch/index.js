import React from 'react';
import PropTypes from 'prop-types';

const Switch = ({ label, checked, disabled, readOnly }) => (
	<label htmlFor="checkbox">
		<span>{label}</span>
		<input type="checkbox" checked={checked} disabled={disabled} readOnly={readOnly} />
	</label>
);

Switch.propTypes = {
	label: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool
};

Switch.defaultProps = {
	label: '',
	checked: false,
	disabled: false,
	readOnly: false
};

export default Switch;

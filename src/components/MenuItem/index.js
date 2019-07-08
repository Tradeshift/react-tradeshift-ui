import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const MenuItem = ({ children, selected, disabled }) => (
	<li className={cx({ 'ts-checked': selected })}>
		<button type="submit" disabled={disabled}>
			<span>{children}</span>
			{selected ? <i className="ts-icon-checked" /> : null}
		</button>
	</li>
);

MenuItem.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	selected: PropTypes.bool,
	disabled: PropTypes.bool
};

MenuItem.defaultProps = {
	children: null,
	selected: false,
	disabled: false
};

export default MenuItem;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Tooltip = props => {
	const { id, title, children } = props;
	useEffect(() => {
		let tooltipEle = document.getElementById(id);
		tooltipEle.setAttribute('data-ts.title', title);
	}, [id, title]);
	return (
		<div id={props.id} data-ts="Tooltip">
			{children}
		</div>
	);
};

Tooltip.defaultProps = {
	children: [],
	title: ''
};

Tooltip.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default Tooltip;

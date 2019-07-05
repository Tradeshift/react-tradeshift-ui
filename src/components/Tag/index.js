import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Tag = props => {
	const { id, label, text, type, onDelete } = props;
	useEffect(() => {
		window.ts.ui.get(`#${id}`, tag => {
			tag.data = new Map([[label, text]]);
			tag.doremove = false;
			if (!_.isNil(type)) {
				tag.type = type;
			}
			if (!_.isNil(onDelete)) {
				tag.ondelete = () => {
					onDelete();
				};
			}
		});
	}, [props]);
	return <figure id={id} data-ts="Tag" />;
};

Tag.defaultProps = {
	label: '',
	text: '',
	onDelete: null,
	type: null
};

Tag.propTypes = {
	label: PropTypes.string,
	text: PropTypes.string,
	onDelete: PropTypes.func,
	id: PropTypes.string.isRequired,
	type: PropTypes.string
};

export default Tag;

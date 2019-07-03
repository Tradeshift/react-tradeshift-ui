import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Table = props => {
	const renderTable = props => {
		const { id, cols, rows, onbutton, linkable, pager, explode, selectable } = props;
		window.ts.ui.get(`#${id}`, table => {
			explode && table.explode();
			selectable && table.selectable();
			table.cols(cols);
			table.rows(rows);
			if (!_.isNil(pager) && pager.pages > 1) {
				table.pager(pager);
			}
			if (!_.isNil(onbutton)) {
				table.onbutton = onbutton;
			}
			if (!_.isNil(linkable)) {
				table.linkable = linkable;
			}
		});
	};

	useEffect(() => {
		if (_.isNil(props.cols) || _.isNil(props.rows)) {
			return;
		}
		renderTable(props);
	}, [props]);

	return <div data-ts="Table" id={props.id} className={props.className} />;
};

Table.defaultProps = {
	onbutton: () => {},
	linkable: () => {},
	pager: {},
	className: '',
	selectable: false,
	explode: false
};
Table.propTypes = {
	id: PropTypes.string.isRequired,
	cols: PropTypes.array.isRequired,
	rows: PropTypes.array.isRequired,
	onbutton: PropTypes.func,
	linkable: PropTypes.func,
	pager: PropTypes.object,
	className: PropTypes.string,
	selectable: PropTypes.bool,
	explode: PropTypes.bool
};
export default Table;

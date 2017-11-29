/* eslint-disable react/no-unused-prop-types */
import PropTypes from 'prop-types';
import { Component } from 'react';

const TYPES = ['info', 'warning', 'error', 'success'];
const noop = () => {};

export default class Notification extends Component {
	constructor(props) {
		super(props);
		this.notification = window.ts.ui.Notification;
	}

	componentDidMount() {
		this.update(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.update(nextProps);
	}

	update({ type, message, buttonLabel, onaccept, onlink }) {
		const method = TYPES.indexOf(type) > -1 ? type : TYPES[0];

		this.notification[method](message, buttonLabel || undefined, {
			onaccept,
			onlink
		});
	}

	render() {
		return null;
	}
}

Notification.defaultProps = {
	buttonLabel: undefined,
	onaccept: noop,
	onlink: noop
};

Notification.propTypes = {
	type: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	buttonLabel: PropTypes.string,
	onaccept: PropTypes.func,
	onlink: PropTypes.func
};

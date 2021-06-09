/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

class Note extends React.Component {
	constructor(...args) {
		super(...args);
		this.update = this.update.bind(this);
		this.note = null;
		this.update(this.props);
	}

	componentDidMount() {
		this.update(this.props);
	}

	componentDidUpdate() {
		this.update(this.props);
	}

	componentWillUnmount() {
		if (this.note) {
			this.note.close();
		}
		this.note = null;
	}

	update(props) {
		const component = this;
		window.ts.ui.ready(() => {
			const note = window.ts.ui.Note({
				icon: props.icon,
				text: props.text,
				onclose: props.onClose,
			});
			note.icon = props.icon;
			note.text = props.text;
			note.onclose = props.onClose;
			component.note = note;
		});
	}

	render() {
		return null;
	}
}

Note.propTypes = {
	icon: PropTypes.string,
	text: PropTypes.string.isRequired,
	onClose: PropTypes.func,
};

Note.defaultProps = {
	icon: null,
	onClose: () => {},
};

export default Note;

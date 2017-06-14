import { Component } from 'react';
import PropTypes from 'prop-types';

class StatusBar extends Component {
	componentDidMount() {
		this.update(this.props.visible, this.props.linkable, this.props.message, this.props.buttons);
	}

	componentWillReceiveProps(nextProps) {
		this.update(nextProps.visible, nextProps.linkable, nextProps.message, nextProps.buttons);
	}

	componentWillUnmount() {
		if (this.bar) {
			this.bar.hide();
		}
	}

	update(visible, linkable, message, buttons) {
		window.ts.ui.ready(() => {
			this.bar = window.ts.ui.StatusBar;

			if (visible) {
				if (linkable) {
					this.bar.linkable();
				}
				this.bar.message(message);
				this.bar.buttons(buttons);
				this.bar.show();
			} else {
				this.bar.hide();
			}
		});
	}

	render() {
		return null;
	}
}

StatusBar.propTypes = {
	buttons: PropTypes.arrayOf(PropTypes.object),
	linkable: PropTypes.bool,
	message: PropTypes.string,
	visible: PropTypes.bool
};

StatusBar.defaultProps = {
	buttons: [],
	linkable: false,
	message: '',
	visible: true
};

export default StatusBar;

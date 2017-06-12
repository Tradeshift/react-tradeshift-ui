import { Component } from 'react';
import PropTypes from 'prop-types';

// const noop = () => {};

class StatusBar extends Component {
	componentWillReceiveProps(nextProps) {
		this.visible = nextProps.visible;

		if (nextProps.visible) {
			if (nextProps.linkable) {
				window.ts.ui.StatusBar.linkable();
			}
			window.ts.ui.StatusBar.message(nextProps.message);
			window.ts.ui.StatusBar.buttons(nextProps.buttons);
			window.ts.ui.StatusBar.show();
		} else {
			window.ts.ui.StatusBar.hide();
		}
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

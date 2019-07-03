import React from 'react';
import PropTypes from 'prop-types';

class Spinner extends React.PureComponent {
	componentDidUpdate() {
		window.ts.ui.get('.ts-app', app => {
			if (this.props.show) {
				if (this.props.blocking) {
					app.blocking(this.props.message);
				} else {
					app.busy(this.props.message);
				}
			} else {
				app.done();
			}
		});
	}

	render() {
		return null;
	}
}

Spinner.defaultProps = {
	blocking: false
};
Spinner.propTypes = {
	show: PropTypes.bool.isRequired,
	message: PropTypes.string.isRequired,
	blocking: PropTypes.bool
};

export default Spinner;

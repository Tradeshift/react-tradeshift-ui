import PropTypes from 'prop-types';
import { Component } from 'react';

export const COLOR = {
	BLUE: 'blue',
	DARK: 'dark',
	GREEN: 'green',
	PURPLE: 'purple'
};

class Header extends Component {
	static update({ visible, title, color, buttons }) {
		window.ts.ui.ready(() => {
			const bar = window.ts.ui.TopBar;
			if (visible) {
				if (color) {
					switch (color) {
						case COLOR.BLUE:
							bar.blue();
							break;
						case COLOR.DARK:
							bar.dark();
							break;
						case COLOR.GREEN:
							bar.green();
							break;
						case COLOR.PURPLE:
							bar.purple();
							break;
						default:
							break;
					}
				}

				bar.title(title);
				bar.buttons(buttons);
				bar.show();
			} else {
				bar.hide();
			}
		});
	}

	componentDidMount() {
		Header.update(this.props);
	}

	componentWillReceiveProps(nextProps) {
		Header.update(nextProps);
	}

	render() {
		return null;
	}
}

/* eslint-disable react/no-unused-prop-types, react/require-default-props */
Header.propTypes = {
	buttons: PropTypes.arrayOf(PropTypes.object),
	color: PropTypes.oneOf([COLOR.BLUE, COLOR.GREEN, COLOR.DARK, COLOR.PURPLE]),
	title: PropTypes.string,
	visible: PropTypes.bool
};
/* eslint-enable react/no-unused-prop-types, react/require-default-props */

Header.defaultProps = {
	color: COLOR.DARK,
	buttons: [],
	title: '',
	visible: true
};

export default Header;

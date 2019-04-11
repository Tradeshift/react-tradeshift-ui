import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

class Pager extends PureComponent {
	constructor(props) {
		super(props);
		this.onRef = this.onRef.bind(this);
	}
	componentDidUpdate() {
		this.onRef(this.pagerRef);
	}
	onRef(ref) {
		if (!ref) {
			return;
		}

		window.ts.ui.get(ref, spirit => {
			spirit.pages = this.props.pages;
			spirit.page = this.props.page;
			if (!this.pagerRef) {
				spirit.onselect = debounce(page => {
					if (this.props.onSelect) {
						this.props.onSelect(page);
					}
				}, 200);
				this.pagerRef = ref;
			}
		});
	}

	render() {
		return <menu data-ts="Pager" ref={this.onRef} />;
	}
}

Pager.propTypes = {
	// The total amount of pages.
	pages: PropTypes.number.isRequired,
	// The current page index, zero based.
	page: PropTypes.number.isRequired,
	// Called whenever a page is selected; and with the new index as argument.
	onSelect: PropTypes.func.isRequired
};

export default Pager;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';

const noop = () => {};

class Modal extends Component {
	constructor(props) {
		super(props);
		this.onRef = this.onRef.bind(this);
		this.onOpen = this.onOpen.bind(this);
		this.onClose = this.onClose.bind(this);

		// Sync open flag for onclose / onopen callbacks
		this.isOpen = props.isOpen;
	}

	componentWillReceiveProps(nextProps) {
		this.isOpen = nextProps.isOpen;
		this.onRef(this.modalRef);
	}

	onClose(e) {
		this.props.onClose(e);
		return typeof this.isOpen !== 'undefined' ? !this.isOpen : undefined;
	}

	onOpen(e) {
		this.props.onOpen(e);
		return this.isOpen;
	}

	onRef(ref) {
		if (!ref) {
			return;
		}
		if (!this.modalRef) {
			this.modalRef = ref;
		}

		window.ts.ui.get(ref, spirit => {
			spirit.onclose = this.onClose;
			spirit.onclosed = this.props.onClosed;
			spirit.onopen = this.onOpen;
			spirit.onopened = this.props.onOpened;
			if (this.props.buttons) {
				spirit.buttons(this.props.buttons);
			}
		});
	}

	render() {
		const modalProps = {
			'data-ts.title': this.props.title,
			'data-ts.open': this.props.isOpen
		};
		return (
			<Portal>
				<dialog data-ts="Modal" {...modalProps} ref={this.onRef}>
					<div data-ts="Panel">{this.props.children}</div>
				</dialog>
			</Portal>
		);
	}
}

Modal.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
	onClosed: PropTypes.func,
	onOpen: PropTypes.func,
	onOpened: PropTypes.func,
	title: PropTypes.string,
	buttons: PropTypes.arrayOf(PropTypes.object)
};

Modal.defaultProps = {
	children: null,
	isOpen: undefined,
	onClose: noop,
	onClosed: noop,
	onOpen: noop,
	onOpened: noop,
	title: 'Modal',
	buttons: undefined
};

export default Modal;

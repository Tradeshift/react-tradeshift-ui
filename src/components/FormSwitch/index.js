import React, { Component } from 'react';
import PropTypes from 'prop-types';

const noop = () => {};

class FormSwitch extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.checked = props.checked;
	}

	componentWillReceiveProps(nextProps) {
		this.checked = nextProps.checked;
	}

	onChange(e) {
		this.props.onChange(e);
		return typeof this.checked !== 'undefined' ? !this.checked : undefined;
	}

	render() {
		return (
			<label htmlFor={this.props.id}>
				<span>{this.props.label}</span>
				<input
					type="checkbox"
					id={this.props.id}
					name={this.props.name}
					value={this.props.value}
					checked={this.props.checked}
					defaultChecked={this.props.defaultChecked}
					disabled={this.props.disabled}
					onChange={this.onChange}
				/>
			</label>
		);
	}
}

FormSwitch.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string,
	value: PropTypes.string,
	checked: PropTypes.bool,
	defaultChecked: PropTypes.bool,
	disabled: PropTypes.bool,
	onChange: PropTypes.func
};

FormSwitch.defaultProps = {
	label: '',
	name: '',
	value: undefined,
	checked: undefined,
	defaultChecked: undefined,
	disabled: false,
	onChange: noop
};

export default FormSwitch;

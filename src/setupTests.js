/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

jest.mock('@storybook/react', () => require('./__mocks__/storybook'));
jest.mock('@storybook/addon-knobs', () => require('./__mocks__/knobs'));
const Portal = ({ children }) => <portal>{children}</portal>;
jest.doMock('react-portal', () => ({
	__esModule: true,
	Portal
}));
window.ts = {
	ui: {
		ready: cb => cb(),
		Note: jest.fn().mockReturnValue({}),
		Notification: jest.fn().mockReturnValue({}),
		StatusBar: {
			linkable: jest.fn(),
			message: jest.fn(),
			buttons: jest.fn(),
			show: jest.fn(),
			hide: jest.fn()
		},
		Footer: {
			collabbutton: jest.fn(),
			buttons: jest.fn()
		},
		TopBar: {
			blue: jest.fn(),
			dark: jest.fn(),
			green: jest.fn(),
			purple: jest.fn(),
			title: jest.fn(),
			buttons: jest.fn(),
			show: jest.fn(),
			hide: jest.fn()
		}
	}
};
Portal.propTypes = {
	children: PropTypes.object.isRequired
};

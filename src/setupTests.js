/* eslint-disable global-require */
jest.mock('@storybook/react', () => require('./__mocks__/storybook'));
jest.mock('@storybook/addon-knobs', () => require('./__mocks__/knobs'));
window.ts = {
	ui: {
		ready: cb => cb(),
		Note: jest.fn().mockReturnValue({}),
		Notification: {
			success: jest.fn(),
			info: jest.fn(),
			error: jest.fn(),
			warning: jest.fn()
		},
		StatusBar: {
			linkable: jest.fn(),
			message: jest.fn(),
			buttons: jest.fn(),
			show: jest.fn(),
			hide: jest.fn()
		}
	}
};

/* eslint-disable global-require */
jest.mock('@kadira/storybook', () => require('./__mocks__/storybook'));
jest.mock('@kadira/storybook-addon-knobs', () => require('./__mocks__/knobs'));
window.ts = {
	ui: {
		ready: cb => cb(),
		Note: jest.fn().mockReturnValue({}),
		Notification: jest.fn().mockReturnValue({})
	}
};

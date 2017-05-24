import React from 'react';
import PropTypes from 'prop-types';

// Shallow rendering allows us to get past DOM mocking issues
const ReactShallowRenderer = require('react-test-renderer/shallow');

const renderer = new ReactShallowRenderer();

// This Wrapper allows us to render native components because the shallow
// renderer only allows shallow mocking of native components so if we need to
// wrap a component in a form for example, this allows us to test the story
const TestWrapper = ({ children }) => <TestWrapper>{children}</TestWrapper>;
TestWrapper.propTypes = {
	children: PropTypes.element
};
TestWrapper.defaultProps = {
	children: ''
};

// Mocked version of `import { action } from "@kadira/storybook"`.
export const action = () => jest.fn();

// Mocked version of `import { storiesOf } from "@kadira/storybook"`.
export const storiesOf = groupName => {
	const createSpec = (storyName, story) => {
		describe(groupName, () => {
			it(storyName, () => {
				const component = renderer.render(<TestWrapper>{story()}</TestWrapper>);
				expect(component).toMatchSnapshot();
			});
		});
	};
	// Mocked API to generate tests from & snapshot stories.
	const api = {
		add(storyName, story) {
			createSpec(storyName, story);
			return api;
		},

		addWithInfo(storyName, ...info) {
			const fns = info.filter(x => typeof x === 'function');
			const story = fns[fns.length - 1];
			createSpec(storyName, story);
			return api;
		},

		// Any `storybook-addon-*` packages may require noop-ing them:
		addDecorator() {
			return api;
		}
	};

	return api;
};

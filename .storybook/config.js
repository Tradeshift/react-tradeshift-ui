import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);
addDecorator(withKnobs);

addParameters({
	options: {
		name: 'React-tradeshift-ui',
		url: 'https://github.com/Tradeshift/react-tradeshift-ui',
		showPanel: true,
		panelPosition: 'right'
	}
});

configure(function loadStories() {
	require('../src/stories');
}, module);

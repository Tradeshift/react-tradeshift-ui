import { configure, setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);
addDecorator(withKnobs);

setOptions({
	name: 'React-tradeshift-ui',
	url: 'https://github.com/Tradeshift/react-tradeshift-ui',
	goFullScreen: false,
	showLeftPanel: true,
	showDownPanel: true,
	showSearchBox: false,
	downPanelInRight: true,
	sortStoriesByKind: false
});

configure(function loadStories() {
	require('../src/stories');
}, module);

import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import { Pager } from '../components';

const stories = storiesOf('Pager', module);

stories.addWithInfo(
	'Basic usage',
	`Pager has the same interface with tradeshift-ui Pager.
	It uses debounce(200ms) to resolve quick click issue. 
	Use the onSelect callback to get the selected page number.`,
	() => (
		<Pager pages={number('pages', 20)} page={number('page', 0)} onSelect={action('onSelect')} />
	),
	{ inline: true }
);

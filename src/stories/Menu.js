import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { boolean } from '@kadira/storybook-addon-knobs';
import { Menu, MenuItem } from '../components';

const stories = storiesOf('Menu', module);

stories.addWithInfo(
	'Basic usage',
	() => (
		<Menu>
			<MenuItem selected={boolean('selected', true)} disabled={boolean('disabled', false)}>
				Menu item 1
			</MenuItem>
			<MenuItem>
				Menu item 2
			</MenuItem>
		</Menu>
	),
	{ inline: true }
);

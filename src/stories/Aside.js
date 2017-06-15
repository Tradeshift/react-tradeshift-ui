import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { Aside, Menu, MenuItem } from '../components';

const stories = storiesOf('Aside', module);

stories.addWithInfo(
	'Controlled mode',
	`In controlled mode the aside will respect the isOpen attribute at all times.
	Use the onClose callback to toggle the flag.`,
	() =>
		<Aside
			title={text('title', 'Aside demo')}
			isOpen={boolean('isOpen', false)}
			loadingMessage={text('loadingMessage', 'Loading...')}
			isLoading={boolean('isLoading', false)}
			onOpen={action('onOpen')}
			onOpened={action('onOpened')}
			onClose={action('onClose')}
			onClosed={action('onClosed')}
		>
			<Menu>
				<MenuItem>
					Menu item
				</MenuItem>
			</Menu>
		</Aside>,
	{ inline: true }
);

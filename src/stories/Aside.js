import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';
import { Aside, Menu, MenuItem } from '../components';

const stories = storiesOf('Aside', module);

stories.addWithInfo(
	'Controlled mode',
	`In controlled mode the aside will respect the isOpen attribute at all times.
	Use the onClose callback to toggle the flag.`,
	() => (
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
				<MenuItem>Menu item</MenuItem>
			</Menu>
		</Aside>
	),
	{ inline: true }
);

stories.addWithInfo(
	'Aside tabs',
	'Aside may contain tabs content. Just define some Panels in specified format',
	() => {
		const tabCount = number('tabCount', 2, {
			range: true,
			min: 2,
			max: 10,
			step: 1
		});
		const tabs = [];
		for (let index = 0; index < tabCount; index += 1) {
			const tabLabel = {
				'data-ts.label': ['tab', index].join(' ')
			};
			const tabContent = ['tab', index, 'content'].join(' ');
			tabs.push(
				<div data-ts="Panel" key={index} {...tabLabel}>
					{tabContent}
				</div>
			);
		}

		return (
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
				{tabs}
			</Aside>
		);
	},
	{ inline: true }
);

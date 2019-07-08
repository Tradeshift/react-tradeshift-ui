import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs/react';
import { Aside, Menu, MenuItem } from '../components';

const stories = storiesOf('Aside', module);
stories.add(
	'Controlled mode',
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
			className="aside-class"
		>
			<Menu>
				<MenuItem>Menu item</MenuItem>
			</Menu>
		</Aside>
	),
	{
		info: `In controlled mode the aside will respect the isOpen attribute at all times
				Use the onClose callback to toggle the flag.`
	}
);

stories.add(
	'Aside tabs',
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
	{ info: 'Aside may contain tabs content. Just define some Panels in specified format' }
);

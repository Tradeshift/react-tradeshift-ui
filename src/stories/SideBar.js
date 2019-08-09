import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';
import { SideBar, Menu, MenuItem } from '../components';

const stories = storiesOf('SideBar', module);

stories.addWithInfo(
	'Controlled mode',
	`In controlled mode the side bar will respect the isOpen attribute at all times.
	Use the onClose callback to toggle the flag.`,
	() => (
		<SideBar
			title={text('title', 'SideBar demo')}
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
		</SideBar>
	),
	{ inline: true }
);

stories.addWithInfo(
	'SideBar tabs',
	'SideBar may contain tabs content. Just define some Panels in specified format',
	() => {
		const tabCount = number('tabCount', 3, {
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
			<SideBar
				title={text('title', 'SideBar demo')}
				isOpen={boolean('isOpen', false)}
				loadingMessage={text('loadingMessage', 'Loading...')}
				isLoading={boolean('isLoading', false)}
				onOpen={action('onOpen')}
				onOpened={action('onOpened')}
				onClose={action('onClose')}
				onClosed={action('onClosed')}
			>
				{tabs}
			</SideBar>
		);
	},
	{ inline: true }
);

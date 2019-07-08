import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, number, select } from '@storybook/addon-knobs';
import _ from 'lodash';
import { Header } from '../components';

const stories = storiesOf('Header', module);

stories.add('Change the title', () => <Header title={text('header title', 'My cool title')} />, {
	info: 'The Header component accepts a "title" property.'
});

stories.add(
	'Change the color',
	() => (
		<Header
			title="the title"
			color={select('color', ['blue', 'dark', 'green', 'purple'], 'dark', 'foo-id-2')}
		/>
	),
	{ info: 'The Header component accepts a "color" property to change the color.' }
);

stories.add(
	'Show buttons',
	() => {
		const buttons = _.times(number('buttonsCount', 2)).map(count => ({
			label: text(`button_${count}_title`, `Button ${count}`),
			type: text(`button_${count}_class`, `ts-primary button-${count}`),
			onclick() {
				action(`Header button ${count} clicked`);
			}
		}));

		return <Header buttons={buttons} title="the title" color="purple" />;
	},
	{
		info: `The Header component accepts a 'buttons' prop in an Array of Objects format as documented in ui.tradeshift.com.
	No buttons will be displayed if this prop is empty or not passed.`
	}
);

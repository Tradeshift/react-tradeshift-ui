import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';
import _ from 'lodash';

import { StatusBar } from '../components';

const stories = storiesOf('StatusBar (deprecated)', module);

stories.add(
	'Show buttons',
	() => {
		const buttons = _.times(number('buttonsCount', 2)).map(count => ({
			label: text(`button_${count}_title`, `Button ${count}`),
			type: text(`button_${count}_class`, `ts-primary button-${count}`),
			onclick() {
				action(`StatusBar button ${count} clicked`);
			}
		}));

		return <StatusBar buttons={buttons} />;
	},
	{
		info: `The StatusBar component accepts a "buttons" prop in an Array of Objects format as documented in ui.tradeshift.com.
	No buttons will be displayed if this prop is empty or not passed.`
	}
);

stories.add(
	'Show message',
	() => (
		<StatusBar
			linkable={boolean('linkable', true)}
			message={text(
				'message',
				'StatusBar message (with a link)[http://ui.tradeshift.com/#components/bars/statusbar.html]'
			)}
		/>
	),
	{
		info: `The StatusBar component accepts a "message" prop in a string format.
	In addition, a "linkable" prop can also be passed
	which will render links in the message if this prop evaluates to true
	No message will be displayed if this prop is empty or not passed`
	}
);

stories.add('Hide bar', () => <StatusBar visible={boolean('visible', false)} />, {
	info: `The StatusBar component accepts a "message" prop in a string format.
	In addition, a "linkable" prop can also be passed
	which will render links in the message if this prop evaluates to true
	No message will be displayed if this prop is empty or not passed`
});

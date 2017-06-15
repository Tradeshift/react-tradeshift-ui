import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';
import _ from 'lodash';

import { StatusBar } from '../components';

const stories = storiesOf('StatusBar', module);

stories.addWithInfo(
	'Show buttons',
	`The StatusBar component accepts a "buttons" prop in an Array of Objects format as documented in ui.tradeshift.com.
	No buttons will be displayed if this prop is empty or not passed.`,
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
	{ inline: true }
);

stories.addWithInfo(
	'Show message',
	`The StatusBar component accepts a "message" prop in a string format.
	In addition, a "linkable" prop can also be passed
	which will render links in the message if this prop evaluates to true
	No message will be displayed if this prop is empty or not passed`,
	() =>
		<StatusBar
			linkable={boolean('linkable', true)}
			message={text(
				'message',
				'StatusBar message (with a link)[http://ui.tradeshift.com/#components/bars/statusbar.html]'
			)}
		/>,
	{ inline: true }
);

stories.addWithInfo(
	'Hide bar',
	`The StatusBar component accepts a "visible" prop in a boolean format.
	You can pass "false" to the "visible" prop
	or an expression that evaluates to false to hide it.
	The StatusBar will be visible by default if the "visible" prop is not passed`,
	() => <StatusBar visible={boolean('visible', false)} />,
	{ inline: true }
);

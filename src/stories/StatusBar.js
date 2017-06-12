import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text, boolean, number } from '@kadira/storybook-addon-knobs';
import _ from 'lodash';

import { StatusBar } from '../components';

const stories = storiesOf('StatusBar', module);

stories.addWithInfo(
	'Controlled mode',
	`In controlled mode the StatusBar will respect the isOpen attribute at all times.
	Use the onClose callback to toggle the flag.`,
	() => {
		const buttons = _.times(number('buttonsCount', 0)).map(count => ({
			label: text(`button_${count}_title`, `Button ${count}`),
			type: text(`button_${count}_class`, `ts-primary button-${count}`),
			onclick() {
				action(`StatusBar button ${count} clicked`);
			}
		}));

		return (
			<StatusBar
				visible={boolean('visible', true)}
				linkable={boolean('linkable', true)}
				message={text('message', 'StatusBar message')}
				buttons={buttons}
			/>
		);
	},
	{ inline: true }
);

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { boolean, text } from '@kadira/storybook-addon-knobs';
import Switch from '../components/Switch';

const stories = storiesOf('Switch', module);

stories.addWithInfo(
	'Switch should be used in a form',
	() => (
		<form data-ts="Form">
			<fieldset>
				<span>Settings Page</span>
				<Switch
					id={text('id', 'switch-one')}
					label={text('label', 'Switch one')}
					checked={boolean('checked', true)}
					disabled={boolean('disabled', false)}
					readOnly={boolean('readOnly', false)}
				/>
			</fieldset>
		</form>
	),
	{ inline: true }
);

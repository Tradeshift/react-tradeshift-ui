import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { boolean, text } from '@kadira/storybook-addon-knobs';
import { Switch } from '../../components';

const stories = storiesOf('Switch', module);

stories.addWithInfo(
	'Switch should be used in a form',
	() => (
		<form data-ts="Form">
			<fieldset>
				<span>Controlled mode</span>
				<Switch
					id={text('id', 'switch-one')}
					label={text('label', 'Switch one')}
					checked={boolean('checked', true)}
					disabled={boolean('disabled', false)}
					onChange={action('onChange')}
				/>
			</fieldset>
			<fieldset>
				<span>Uncontrolled mode</span>
				<Switch
					id={text('id2', 'switch-two')}
					label={text('label2', 'Switch two')}
					disabled={boolean('disabled2', false)}
					defaultChecked
				/>
			</fieldset>
		</form>
	),
	{ inline: true }
);

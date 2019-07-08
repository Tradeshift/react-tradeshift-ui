import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { Form, FormSwitch } from '../components';

const stories = storiesOf('Form', module);

stories.add(
	'FormSwitch',
	() => (
		<Form>
			<fieldset>
				<span>Controlled mode</span>
				<FormSwitch
					id={text('id', 'switch-one')}
					label={text('label', 'Switch one')}
					checked={boolean('checked', true)}
					disabled={boolean('disabled', false)}
					onChange={action('onChange')}
				/>
			</fieldset>
			<fieldset>
				<span>Uncontrolled mode</span>
				<FormSwitch
					id={text('id2', 'switch-two')}
					label={text('label2', 'Switch two')}
					disabled={boolean('disabled2', false)}
					defaultChecked
				/>
			</fieldset>
		</Form>
	),
	{ info: 'FormSwitch should be used in a form' }
);

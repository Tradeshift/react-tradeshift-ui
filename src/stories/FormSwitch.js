import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { Form, FormSwitch } from '../components';

const stories = storiesOf('Form', module);

stories.addWithInfo(
	'FormSwitch',
	'FormSwitch must be used inside the <Form> component',
	() =>
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
		</Form>,
	{ inline: true }
);

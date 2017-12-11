import React from 'react';
import { storiesOf, action } from '@storybook/react';
// import { boolean, text } from '@storybook/addon-knobs';
import { Form, FormInput } from '../components';

const stories = storiesOf('Form', module);

stories.addWithInfo(
	'FormInput',
	'FormInput must be used inside the <Form> component',
	() =>
		<Form>
			<h3>No label</h3>
			<fieldset>
				<FormInput onChange={action('noLabelInputChange')} />
			</fieldset>

			<h3>With label</h3>
			<fieldset>
				<FormInput label="Text input with label" type="text" onChange={action('textInputChange')} />
			</fieldset>

			<h3>Email</h3>
			<fieldset>
				<FormInput label="Email input" type="email" onChange={action('emailInputChange')} />
			</fieldset>

			<h3>Number</h3>
			<fieldset>
				<FormInput label="Number input" type="number" onChange={action('numberInputChange')} />
			</fieldset>

			<h3>Tel</h3>
			<fieldset>
				<FormInput label="Tel input" type="tel" onChange={action('telInputChange')} />
			</fieldset>
		</Form>,
	{ inline: true }
);

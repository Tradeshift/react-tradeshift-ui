import React from 'react';
import { storiesOf } from '@storybook/react';
import { Form } from '../components';

const stories = storiesOf('Form', module);

stories.addWithInfo(
	'Basic structure',
	`
		Form elements must be wrapped inside a Form component.
		The Form component renders the basic ts-ui form structure
	`,
	() => <Form />,
	{ inline: true }
);

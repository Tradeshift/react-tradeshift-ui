import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { Spinner } from '../components';

const stories = storiesOf('Spinner', module);

stories.add(
	'Basic usage',
	() => {
		const shouldShow = boolean('shouldShow', false);
		const blocking = boolean('blocking', true);
		const message = text('text', 'Loading');
		return <Spinner show={shouldShow} blocking={blocking} message={message} />;
	},
	{
		info: 'The blocking props is treated as false if you don’t set it'
	}
);

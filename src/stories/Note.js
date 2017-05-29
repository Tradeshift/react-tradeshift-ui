import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { boolean, text } from '@kadira/storybook-addon-knobs';
import { Note } from '../components';

const stories = storiesOf('Note', module);

stories.addWithInfo(
	'Basic usage',
	'Notes are toggled by rendering and removing them frmo the DOM. You can only have one note on a page at a time.',
	() => {
		const shouldShow = boolean('shouldShow', true);
		const noteText = text('text', 'My awesome note');
		return shouldShow
			? <Note icon={''} text={noteText} onClose={action('onClose')} />
			: 'Totally not a Note';
	},
	{ inline: true }
);

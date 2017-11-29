import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import Notification from '../components/Notification';

const stories = storiesOf('Notification', module);

stories.addWithInfo(
	'Show Notification',
	'Notification is toggled by rendering and removing it from the DOM.',
	() => {
		const showNotification = boolean('My Notification', false);
		const type = select('type', ['success', 'info', 'warning', 'error']);
		const message = text('message', 'Success Message');

		return showNotification && <Notification type={type} message={message} />;
	},
	{ inline: true }
);

stories.addWithInfo(
	'Optional parameters',
	"Notification can receive as a parameter 'onaccept', 'onlink' and the button label.",
	() => {
		const showNotification = boolean('My Notification', false);
		const type = select('type', ['success', 'info', 'warning', 'error']);
		const message = text('message', 'Success Message');
		const buttonLabel = text('buttonLabel', 'Confirm');
		const onaccept = action("'onaccept' callback");
		const onlink = action("'onlink' callback");

		return (
			showNotification &&
			<Notification
				type={type}
				message={message}
				buttonLabel={buttonLabel}
				onaccept={onaccept}
				onlink={onlink}
			/>
		);
	},
	{ inline: true }
);
stories.addWithInfo(
	'Markdown and Links',
	"Notification supports markdown messages, and if it have a link, the 'onlink' callback will be called when the link is clicked.",
	() => {
		const showNotification = boolean('My Notification', false);
		const type = select('type', ['success', 'info', 'warning', 'error']);
		const messageMD = text(
			'message',
			'Markdown for **bold text** and *italic text* and `source code` \nMarkdown for a (hyperlink)[http://www.example.com/]'
		);
		const buttonLabel = text('buttonLabel', 'Confirm');
		const onaccept = action("'onaccept' callback");
		const onlink = action("'onlink' callback");
		return (
			showNotification &&
			<Notification
				type={type}
				message={messageMD}
				buttonLabel={buttonLabel}
				onaccept={onaccept}
				onlink={onlink}
			/>
		);
	},
	{ inline: true }
);

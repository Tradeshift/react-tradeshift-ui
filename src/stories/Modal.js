import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text, boolean } from '@kadira/storybook-addon-knobs';

import { Modal } from '../components';

const stories = storiesOf('Modal', module);

stories.addWithInfo(
	'Controlled mode',
	`In controlled mode the Modal will respect the isOpen attribute at all times.
	Use the onClose callback to toggle the flag.`,
	() => {
		const buttons = [
			{
				label: text('button_title', 'Button title'),
				type: text('button_class', 'ts-primary'),
				onclick() {
					action('onClick');
				}
			}
		];
		return (
			<Modal
				title={text('title', 'Fullscreen Modal demo')}
				isOpen={boolean('isOpen', false)}
				onOpen={action('onOpen')}
				onOpened={action('onOpened')}
				onClose={action('onClose')}
				onClosed={action('onClosed')}
				buttons={buttons}
			>
				<main data-ts="Main">
					<h1>A Modal Example</h1>
					<p>…</p>
					<p>
						<button onClick={action('onClose')} className="ts-primary">
							<span>Close the Modal</span>
						</button>
					</p>
				</main>

			</Modal>
		);
	},
	{ inline: true }
);

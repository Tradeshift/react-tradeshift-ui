import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { boolean, text, array } from '@kadira/storybook-addon-knobs';
import Button from '../components/Button';

const stories = storiesOf('Buttons', module);

stories
	.addWithInfo(
		'Text Button',
		() => (
			<Button
				id={text('id', 'switch-one')}
				busy={boolean('busy', false)}
				classes={array('classes (separated by a comma)', ['ts-primary', 'ts-micro'], ',')}
			>
				<span>Default Button</span>
			</Button>
		),
		{ inline: true }
	)
	.addWithInfo(
		'Icon Button',
		() => (
			<Button
				id={text('id', 'switch-one')}
				busy={boolean('busy', false)}
				classes={array('classes (separated by a comma)', ['ts-tertiary'], ',')}
			>
				<i className="ts-icon-locked" />
			</Button>
		),
		{ inline: true }
	);

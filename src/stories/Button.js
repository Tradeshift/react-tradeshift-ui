import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button } from '../components';

const stories = storiesOf('Button', module);

stories.add(
	'Basic structure',
	() => (
		<Button>
			<span>Default Button</span>
		</Button>
	),
	{
		info: 'A simple Button does not require any props',
	},
);

stories.add(
	'Primary button',
	() => (
		<Button className="ts-primary">
			<span>Primary Button</span>
		</Button>
	),
	{
		info: 'A primary Button requires `ts-primary` className',
	},
);

stories.add(
	'Secondary button',
	() => (
		<Button className="ts-secondary">
			<span>Secondary Button</span>
		</Button>
	),
	{
		info: 'A secondary Button requires `ts-secondary` className',
	},
);

stories.add(
	'Tertiary button',
	() => (
		<Button className="ts-tertiary">
			<span>Tertiary Button</span>
		</Button>
	),
	{
		info: 'A tertiary Button requires `ts-tertiary` className',
	},
);

stories.add(
	'Micro button',
	() => (
		<Button className="ts-primary ts-micro">
			<span>Micro Button</span>
		</Button>
	),
	{
		info:
			'A micro Button requires `ts-micro` and one of `ts-primary` `ts-secondary` `ts-tertiary` className',
	},
);

stories.add(
	'Busy button',
	() => (
		<Button busy className="ts-primary">
			<span>Busy Button</span>
		</Button>
	),
	{
		info: 'For making a Button busy, set `busy={true}`',
	},
);

stories.add(
	'Icon button',
	() => (
		<Button className="ts-primary">
			<i className="ts-icon-arrowright" />
		</Button>
	),
	{
		info: 'For more information visit `tradeshift-ui` documentation page',
	},
);

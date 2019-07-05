import React from 'react';
import { storiesOf } from '@storybook/react';
// import { boolean } from '@storybook/addon-knobs';
import { Tooltip } from '../components';

const stories = storiesOf('Tooltip', module);
stories.add('Basic usage', () => {
	return (
		<Tooltip id="tooltip-example" title="hahha">
			Tooltip will show on mouse hover.
		</Tooltip>
	);
});

import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { Table } from '../components';

const stories = storiesOf('Table', module);
const tableConfig = {
	cols: [{ label: 'One' }, { label: 'Two' }, { label: 'Three' }],
	rows: [['A', 'D', 'G'], ['B', 'E', 'H'], ['C', 'F', 'I']]
};
stories.add('Basic usage', () => {
	const shouldShow = boolean('shouldShow', false);
	return shouldShow ? (
		<div style={{ height: 200 }}>
			<Table id="profile-table" cols={tableConfig.cols} rows={tableConfig.rows} />
		</div>
	) : null;
});

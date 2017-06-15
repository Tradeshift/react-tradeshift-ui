import React from 'react';
import { storiesOf } from '@storybook/react';
import { TsLogo } from '../components';

const stories = storiesOf('TsLogo', module);

stories.addWithInfo('Basic usage', () => <TsLogo />, { inline: true });

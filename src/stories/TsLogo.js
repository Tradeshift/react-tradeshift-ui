import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { TsLogo } from '../components';

const stories = storiesOf('TsLogo', module);

stories.addWithInfo('Basic usage', () => <TsLogo />, { inline: true });

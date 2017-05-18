import React from 'react';
import { shallow } from 'enzyme';

import TsLogo from './';

describe('TsLogo', () => {
	it('should render correctly', () => {
		const tree = shallow(<TsLogo />);
		expect(tree).toMatchSnapshot();
	});
});

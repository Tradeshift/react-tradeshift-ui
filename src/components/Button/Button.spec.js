import React from 'react';
import { mount } from 'enzyme';

import Button from './';

describe('Button', () => {
	it('loads an array of classes', () => {
		const wrapper = mount(<Button />);

		wrapper.setProps({
			classes: ['ts-primary', 'ts-micro']
		});

		expect(wrapper.find('.ts-primary .ts-micro')).toBeTruthy();
	});

	it('can accept arbitrary html attributes', () => {
		const wrapper = mount(<Button />);

		wrapper.setProps({ htmlProps: { disabled: 'disabled' } });

		expect(wrapper.find('button[disabled]')).toHaveLength(1);
	});

	it('can be set as busy', () => {
		const wrapper = mount(<Button busy />);
		// Allow the DOM to update
		setTimeout(() => {
			expect(wrapper.find('button[data-ts.busy]')).toHaveLength(1);
		}, 500);
	});

	it('can be made tiny', () => {
		const wrapper = mount(<Button classes={['ts-micro']} />);

		expect(wrapper.find('button.ts-micro')).toHaveLength(1);
	});

	it('can accept multiple classes', () => {
		const wrapper = mount(<Button classes={['ts-micro', 'ts-tertiary']} />);

		expect(wrapper.find('button.ts-micro.ts-tertiary')).toHaveLength(1);
	});

	it('will create an icon button', () => {
		const wrapper = mount(
			<Button classes={['ts-micro', 'ts-tertiary']}>
				<i className="ts-icon-locked" />
			</Button>
		);

		expect(wrapper.find('button .ts-icon-locked')).toHaveLength(1);
	});
});

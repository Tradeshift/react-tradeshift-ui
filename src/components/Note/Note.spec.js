import React from 'react';
import { mount } from 'enzyme';

import Note from './';

describe('Note', () => {
	// Add specific tests for ui-spirit related functions
	describe('lifecycle', () => {
		it('updates on prop change', () => {
			Note.prototype.update = jest.fn(Note.prototype.update);
			const wrapper = mount(<Note text="Foo" />);
			const component = wrapper.instance();

			wrapper.setProps({ text: 'Bar' });
			expect(component.update).toHaveBeenCalledWith(
				jasmine.objectContaining({
					text: 'Bar'
				})
			);
		});

		it('closes on unmount', () => {
			const wrapper = mount(<Note text="Foo" />);
			const component = wrapper.instance();
			expect(component.note).toBeTruthy();
			const note = component.note;
			note.close = jest.fn();
			wrapper.unmount();
			expect(note.close).toHaveBeenCalled();
		});
	});
});

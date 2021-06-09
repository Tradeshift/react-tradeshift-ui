import { render, cleanup } from '@testing-library/react';
import React from 'react';
import Note from '.';

describe('Note', () => {
	// Add specific tests for ui-spirit related functions
	describe('lifecycle', () => {
		beforeEach(() => {
			cleanup();
			jest.restoreAllMocks();
		});

		it('updates on prop change', () => {
			jest.spyOn(window.ts.ui, 'Note').mockReturnValue({
				close() {},
			});
			const updateSpy = jest.spyOn(Note.prototype, 'update');
			const wrapper = render(<Note text="Foo" />);

			wrapper.rerender(<Note text="Bar" />);
			expect(updateSpy).toHaveBeenCalledWith(
				expect.objectContaining({
					text: 'Bar',
				}),
			);
		});

		it('closes on unmount', () => {
			const closeSpy = jest.fn();
			const noteSpy = jest.spyOn(window.ts.ui, 'Note').mockReturnValue({
				close: closeSpy,
			});

			const wrapper = render(<Note text="Foo" />);
			expect(noteSpy).toHaveBeenCalled();
			wrapper.unmount();
			expect(closeSpy).toHaveBeenCalled();
		});
	});
});

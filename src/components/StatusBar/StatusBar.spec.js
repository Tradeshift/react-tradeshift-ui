import { render } from '@testing-library/react';
import React from 'react';
import StatusBar from '.';

describe('StatusBar', () => {
	let wrapper;
	let hide;
	// Add specific tests for ui-spirit related functions
	describe('lifecycle', () => {
		beforeEach(() => {
			jest.restoreAllMocks();
			hide = jest.spyOn(window.ts.ui.StatusBar, 'hide');
			wrapper = render(<StatusBar message="Foo" />);
		});

		it('updates on prop change', () => {
			const updateSpy = jest.spyOn(StatusBar.prototype, 'update');
			wrapper.rerender(
				<StatusBar message="Bar" visible linkable buttons={[]} />,
			);
			expect(updateSpy).toHaveBeenCalledWith(true, true, 'Bar', []);
		});

		it('hides if visible prop is false', () => {
			wrapper.rerender(<StatusBar message="Foo" visible={false} />);
			expect(hide).toHaveBeenCalled();
		});

		it('hides on unmount', () => {
			wrapper.unmount();
			expect(hide).toHaveBeenCalled();
		});
	});
});

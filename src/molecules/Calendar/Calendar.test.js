import {action} from '@storybook/addon-actions'
import React from "react";
import {Calendar} from "./index";
import {fireEvent, render} from '@testing-library/react'

let wrapper;
let previousMonthHandlerMocked = jest.fn();
let nextMonthHandlerMocked = jest.fn();

beforeEach(() => {
	
	wrapper = render(<Calendar
		day={new Date('2019/01/01')}
		onPrevious={previousMonthHandlerMocked}
		onNext={nextMonthHandlerMocked}
	/>);
});
describe("calendar should the", () => {
	it("user can navigate the previous month ", () => {
		const { getByTestId } = wrapper;
		
		// obtain the node[s] with tag data-testid
		// folowing the filosophy of testing https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change
		fireEvent.click(getByTestId("previous-month-action"));
		
		expect(previousMonthHandlerMocked).toHaveBeenCalledWith(new Date('2019/01/01'));
	});
	
	it("user can navigate the next month ", () => {
		const { getByTestId } = wrapper;
		
		fireEvent.click(getByTestId("next-month-action"));
		
		expect(nextMonthHandlerMocked).toHaveBeenCalledWith(new Date('2019/01/01'));
	});});


import React from "react";
import { MonthNavigation } from "./index";
import { render, fireEvent } from "@testing-library/react";

let wrapper;
let previousMonthHandlerMocked = jest.fn();
let nextMonthHandlerMocked = jest.fn();

beforeEach(() => {
  wrapper = render(
    <MonthNavigation
      month={"January 2019"}
      onPrevious={previousMonthHandlerMocked}
      onNext={nextMonthHandlerMocked}
    />
  );
});

describe("MonthNavigation Component allow that", () => {
  it("user can see the name of the month and year ", () => {
    const { getByText } = wrapper;
    expect(getByText("January 2019")).toBeInstanceOf(HTMLElement);
  });

  it("user can navigate the previous month ", () => {
    const { getByTestId } = wrapper;

    // obtain the node[s] with tag data-testid
    // folowing the filosophy of testing https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change
    fireEvent.click(getByTestId("previous-month-action"));

    expect(previousMonthHandlerMocked).toHaveBeenCalled();
  });

  it("user can navigate the next month ", () => {
    const { getByTestId } = wrapper;

    fireEvent.click(getByTestId("next-month-action"));

    expect(nextMonthHandlerMocked).toHaveBeenCalled();
  });
});

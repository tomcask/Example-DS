import React from "react";
import { NAMES_OF_THE_MONTH } from "../../services/dates";
import { DatePicker } from "./index";
import { fireEvent, render } from "@testing-library/react";
import { getNodeText, queryAllByText } from "@testing-library/dom";
import { toHaveClass } from "@testing-library/jest-dom";

expect.extend({ toHaveClass });

let wrapper;

beforeEach(() => {
  wrapper = render(<DatePicker options={{}} />);
});

describe("the user ", () => {
  it("Find the mont and year", () => {
    const { getByText } = wrapper;
    const today = new Date();
    const monthAndYearTitle = `${
      NAMES_OF_THE_MONTH[today.getMonth()]
    } ${today.getFullYear()}`;

    expect(getByText(monthAndYearTitle)).toBeInstanceOf(HTMLElement);
  });

  it("can go to the previous month ", () => {
    const { getByTestId, getByText } = wrapper;

    const today = new Date();
    const monthAndYearTitle = `${
      NAMES_OF_THE_MONTH[today.getMonth() - 1]
    } ${today.getFullYear()}`;

    // obtain the node[s] with tag data-testid
    // folowing the filosophy of testing https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change
    fireEvent.click(getByTestId("previous-month-action"));
    expect(getByText(monthAndYearTitle)).toBeInstanceOf(HTMLElement);
  });

  it("can go to the following month ", () => {
    const { getByTestId, getByText } = wrapper;

    const today = new Date();
    const monthAndYearTitle = `${
      NAMES_OF_THE_MONTH[today.getMonth() + 1]
    } ${today.getFullYear()}`;

    // obtain the node[s] with tag data-testid
    // folowing the filosophy of testing https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change
    fireEvent.click(getByTestId("next-month-action"));
    expect(getByText(monthAndYearTitle)).toBeInstanceOf(HTMLElement);
  });

  it("can view a selected day", () => {
    const { getAllByTestId, getByTestId } = wrapper;

    fireEvent.click(getByTestId("text-input-date"));

    const days = getAllByTestId("day-current-month");

    let daySelected = days.find(day =>
      day.className.split(" ").find(val => val === "selected")
    );
    const expectedDay = new Date().getDate();
    expect(getNodeText(daySelected)).toEqual(expectedDay.toString());
  });

  it("can selecte a Date", () => {
    const { getByTestId, getAllByTestId } = wrapper;
    fireEvent.click(getByTestId("text-input-date"));
    const days = getAllByTestId("day-current-month");
    let daySelected = days.find(day => getNodeText(day) === "1");
    fireEvent.click(daySelected);
    daySelected = days.find(day =>
      day.className.split(" ").find(val => val === "selected")
    );
    fireEvent.click(getByTestId("text-input-date"));
    expect(daySelected).toHaveClass("selected");
    expect(getNodeText(daySelected)).toEqual("1");
  });
});

import React from "react";
import {NAMES_OF_THE_MONTH} from '../../services/dates'
import {DatePicker} from "./index";
import { render } from "@testing-library/react";

let wrapper;

beforeEach(() => {
  wrapper = render(<DatePicker />);
});

it("Find the mont and year", () => {
  const today = new Date()
  const monthAndYearTitle = `${NAMES_OF_THE_MONTH[today.getMonth()]} ${today.getFullYear()}`
  const { getByText } = wrapper;
  expect(getByText(monthAndYearTitle)).toBeInstanceOf(HTMLElement);
});

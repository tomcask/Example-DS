import React from "react";
import DatePicker from "./DatePicker";
import { render } from "@testing-library/react";

let wrapper;

beforeEach(() => {
  wrapper = render(<DatePicker />);
});
xit("renders without crashing", () => {
  const { getByText } = wrapper;
  expect(getByText("January")).toBeInstanceOf(HTMLElement);
});

import React from "react";
import { render } from "@testing-library/react";
import { WeekDays } from "./index";

let wrapper;
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

beforeEach(() => {
  wrapper = render(<WeekDays days={days} />);
});

describe("WeekDays Molecule allow that", () => {
  it("user can see a list of the days of the week", () => {
    const { getByText } = wrapper;
    days.forEach(day => {
      expect(getByText(day)).toBeTruthy();
    });
  });
});

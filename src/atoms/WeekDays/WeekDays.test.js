import React from "react";
import { render } from "@testing-library/react";
import {DAYS_OF_THE_WEEK} from '../../services/dates'
import { WeekDays } from "./index";

let wrapper;
let days = DAYS_OF_THE_WEEK;

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

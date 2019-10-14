import React, { useState } from "react";
import PropTypes from "prop-types";
import { getNextMonthDay, getPreviousMonthDay } from "../../services/dates";
import { Calendar } from "../Calendar";

/**
 The naming of this component is based on the semantics and ease of understanding of the code,
 trying to address the reuse depends a lot on the philosophy of the team and company.
 */
const DatePickerComponent = () => {
  const [day, setDay] = useState(new Date());
  const onPrevious = day => {
    setDay(getPreviousMonthDay(day));
  };
  const onNext = () => {
    setDay(getNextMonthDay(day));
  };

  return (
    <>
      <input type="text" placeholder={"select a date"}></input>
      <Calendar day={day} onPrevious={onPrevious} onNext={onNext} />
    </>
  );
};

DatePickerComponent.displayName = "DatePicker";

DatePickerComponent.propTypes = {
  /**
	 Sets the property of the list of day name */
  days: PropTypes.arrayOf(PropTypes.string)
};

export const DatePicker = DatePickerComponent;

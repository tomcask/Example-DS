import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import {
  FORMATS,
  getInitialDate,
  getNextMonthDay,
  getPreviousMonthDay,
  obtainDatefromString
} from "../../services/dates";
import { Calendar } from "../Calendar";

import styles from "./DatePicker.module.scss";
import { DateText } from "../../atoms/DateText";

/**
 The naming of this component is based on the semantics and ease of understanding of the code,
 trying to address the reuse depends a lot on the philosophy of the team and company.
 */
const DatePickerComponent = ({ options }) => {
  const format =
    (options.input && FORMATS[options.input.formatOf]) || FORMATS.es;

  const inputEl = useRef(null);
  const initialDate = getInitialDate();
  const [day, setDay] = useState(initialDate);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(1);

  const onPrevious = day => {
    setSelected(selected - 1);
    setDay(getPreviousMonthDay(day));
  };
  const onNext = () => {
    setSelected(selected + 1);
    setDay(getNextMonthDay(day));
  };

  const toggleCalendar = () => {
    let initialDate = day;
    if (inputEl.current.value.length) {
      initialDate = getInitialDate(
        obtainDatefromString(inputEl.current.value, format)
      );
    }
    setDay(initialDate);
    setVisible(!visible);
  };

  const setSelectedDay = (date, dayOf) => {
    let cleanDate = new Date(
      new Date(date.setDate(dayOf)).setHours(0, 0, 0, 0)
    );

    const formatedDate = new Intl.DateTimeFormat(format).format(cleanDate);
    inputEl.current.value = formatedDate;

    setSelected(1);
    setDay(cleanDate);
    setVisible(!visible);
  };

  return (
    <div className={styles.DatePicker}>
      <DateText
        element={inputEl}
        onClickHandler={toggleCalendar}
        {...options.input}
      />
      <Calendar
        day={day}
        onPrevious={onPrevious}
        onNext={onNext}
        visible={visible}
        selected={selected}
        setSelectedDay={setSelectedDay}
        fontSize={"large"}
        {...options.calendar}
      />
    </div>
  );
};

DatePickerComponent.displayName = "DataPicker";

DatePickerComponent.propTypes = {
  /**
	Sets the property of the list of day name */
  options: PropTypes.object
};

DatePickerComponent.defaultProps = {
  input: {},
  calendar: {}
};

export const DatePicker = DatePickerComponent;

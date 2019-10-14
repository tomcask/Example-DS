import React from "react";
import PropTypes from "prop-types";
import styles from "./WeekDays.module.scss";

/**
 The naming of this component is based on the semantics and ease of understanding of the code,
 trying to address the reuse depends a lot on the philosophy of the team and company.
 */
const WeekDaysComponent = ({ days }) => {
  const list = days.map((val, i) => (
    <li key={`${i}_${val}`} className={styles.DayOfTheWeek}>
      {val}
    </li>
  ));

  return <ul className={styles.WeekDays}>{list}</ul>;
};

WeekDaysComponent.displayName = "WeekDays";

WeekDaysComponent.propTypes = {
  /**
	 Sets the property of the list of day name */
  days: PropTypes.arrayOf(PropTypes.string)
};

export const WeekDays = WeekDaysComponent;

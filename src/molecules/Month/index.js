import React from "react";
import PropTypes from "prop-types";
import {
  getDaysCurrentMonth,
  getDaysFollowingMonth,
  getDaysPreviousMonth
} from "../../services/dates";
import styles from "./Month.module.scss";

/**
 The naming of this component is based on the semantics and ease of understanding of the code,
 trying to address the reuse depends a lot on the philosophy of the team and company.
 */
const MonthComponent = ({ day = new Date() }) => {
  const previous = getDaysPreviousMonth(day).map((val, i) => (
    <div
      key={`previous_${i}_${val}`}
      className={`${styles.Day} ${styles.otherMonth}`}
    >
      {val}
    </div>
  ));
  const current = getDaysCurrentMonth(day).map((val, i) => (
    <div key={`current_${i}_${val}`} className={styles.Day}>
      {val}
    </div>
  ));

  const following = getDaysFollowingMonth(day).map((val, i) => (
    <div
      key={`next_${i}_${val}`}
      className={`${styles.Day} ${styles.otherMonth}`}
    >
      {val}
    </div>
  ));

  const list = [...previous, ...current, ...following];
  return <div className={styles.Month}>{list}</div>;
};

MonthComponent.displayName = "Month";

MonthComponent.propTypes = {
  /**
	 Sets the property of the list of day name */
  day: PropTypes.object
};

export const Month = MonthComponent;

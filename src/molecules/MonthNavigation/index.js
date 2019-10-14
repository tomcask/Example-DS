import React from "react";
import PropTypes from "prop-types";
import { getMonthName } from "../../services/dates";
import styles from "./MonthNavigation.module.scss";

/**
  The naming of this component is based on the semantics and ease of understanding of the code,
  trying to address the reuse depends a lot on the philosophy of the team and company.
 */
const monthNavigationComponent = ({ day = new Date(), onPrevious, onNext }) => {
  const title = `${getMonthName(day)} ${day.getFullYear()}`;
  const onPreviousHandler = onPrevious
    ? () => onPrevious(day)
    : () => {
        console.warn("onPrevious callback not implemented");
      };

  const onNextHandler = onNext
    ? () => onNext(day)
    : () => {
        console.warn("onNext callback not implemented");
      };

  return (
    <div className={styles.MonthNavigation}>
      <div data-testid="previous-month-action" onClick={onPreviousHandler}>
        <i className={styles.arrowLeft}></i>
      </div>
      <div className="ActualMonth">{title}</div>
      <div data-testid="next-month-action" onClick={onNextHandler}>
        <i className={styles.arrowRight}></i>
      </div>
    </div>
  );
};
monthNavigationComponent.displayName = "MonthNavigation";

monthNavigationComponent.propTypes = {
  /**
    Sets the property of the month lavel */
  month: PropTypes.string,
  /**
    Callback that provides browsing to the previous month */
  onPrevious: PropTypes.func,
  /**
    Callback that provides browsing to the next month */
  onNext: PropTypes.func
};

export const MonthNavigation = monthNavigationComponent;

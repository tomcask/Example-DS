import React from "react";
import PropTypes from "prop-types";
import { WeekDays } from "../../atoms/WeekDays";
import { DAYS_OF_THE_WEEK } from "../../services/dates";
import { Month } from "../../atoms/Month";
import { MonthNavigation } from "../MonthNavigation";
import builderCSSClass from "classnames";
import styles from "./Calendar.module.scss";

/**
 The naming of this component is based on the semantics and ease of understanding of the code,
 trying to address the reuse depends a lot on the philosophy of the team and company.
 */
const CalendarComponent = ({
  day,
  onPrevious,
  onNext,
  visible = false,
  selected,
  setSelectedDay,
  //style props
  border = "none",
  background,
  fontSize = "medium",
  fontColor,
  shadow,
  shape = "circle"
}) => {
  const display = visible ? styles.visible : styles.hidden;

  const createStyle = (shadow, background, fontColor) => {
    let style = {
      boxShadow: shadow
    };

    if (background) {
      style.backgroundColor = background;
    }

    if (fontColor) {
      style.color = fontColor;
    }

    return style;
  };
  const style = createStyle(shadow, background, fontColor);
  const classNames = builderCSSClass(
    styles.Calendar,
    display,
    styles[`border_${border}`]
  );

  return (
    <div className={classNames} style={style}>
      <MonthNavigation day={day} onPrevious={onPrevious} onNext={onNext} />
      <WeekDays days={DAYS_OF_THE_WEEK} />
      <Month
        day={day}
        selected={selected}
        setSelectedDay={setSelectedDay}
        fontSize={fontSize}
        shape={shape}
      />
    </div>
  );
};

CalendarComponent.displayName = "Calendar";

CalendarComponent.propTypes = {
  /**
	 Sets the property of the list of day name */
  day: PropTypes.instanceOf(Date),
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  visible: PropTypes.bool,
  selected: PropTypes.number,
  setSelectedDay: PropTypes.func,
  //style props
  border: PropTypes.string,
  background: PropTypes.string,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  shadow: PropTypes.string,
  shape: PropTypes.string
};

CalendarComponent.defaultProps = {
  visible: false,
  border: "none",
  fontSize: "medium",
  shadow: "0px 0px 16px 4px rgba(0,0,0,0.5)",
  shape: "circle"
};

export const Calendar = CalendarComponent;

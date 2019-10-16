import React from "react";
import PropTypes from "prop-types";
import {WeekDays} from '../../atoms/WeekDays'
import {DAYS_OF_THE_WEEK} from '../../services/dates'
import {Month} from '../../atoms/Month'
import {MonthNavigation} from '../MonthNavigation'
import styles from './Calendar.module.scss'



/**
 The naming of this component is based on the semantics and ease of understanding of the code,
 trying to address the reuse depends a lot on the philosophy of the team and company.
 */
const CalendarComponent = ({day, onPrevious, onNext, visible=false, selected, setSelectedDay}) => {
	const display = (visible) ? styles.visible : styles.hidden
	return <div className={`${styles.Calendar} ${display}`}>
		<MonthNavigation
			day={day}
			onPrevious={onPrevious}
			onNext={onNext}
		/>
		<WeekDays
			days={DAYS_OF_THE_WEEK}
		/>
		<Month day={day} selected={selected} setSelectedDay={setSelectedDay}/>
	</div>
};

CalendarComponent.displayName = "Calendar";

CalendarComponent.propTypes = {
	/**
	 Sets the property of the list of day name */
	day: PropTypes.instanceOf(Date),
	onPrevious: PropTypes.func,
	onNext: PropTypes.func
};

export const Calendar = CalendarComponent;

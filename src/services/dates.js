const MS_DAY = 86400000;
export const DAYS_OF_THE_WEEK = [
  "Sun",
  "Mon",
  "Tue",
  "Wen",
  "Thu",
  "Fri",
  "Sat"
];

export const NAMES_OF_THE_MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function getTotalDaysCurrentMonth(selectedDate) {
  const dayOfCurrentMonth = selectedDate.getDate();
  const nextMonthDay = getNextMonthDay(selectedDate);
  const firstDayNextMonth = new Date(nextMonthDay);
  const daysUntilNextMonth = (firstDayNextMonth - selectedDate) / MS_DAY - 1;

  return Math.round(dayOfCurrentMonth + daysUntilNextMonth);
}

export function getInitialDate(value = new Date()){
  return new Date(value.setHours(0, 0, 0, 0))
}

export function getNextMonthDay(selectedDate) {
  let month = selectedDate.getMonth() + 2;
  let year = selectedDate.getFullYear();
  let nextMonthDayString = "";

  if (month === 13) {
    nextMonthDayString = `${year + 1}/01/01 00:00:00`;
  } else {
    month = "" + month;
    if (month.length < 2) {
      month = "0" + month;
    }
    nextMonthDayString = `${year}/${month}/01 00:00:00`;
  }
  return new Date(nextMonthDayString);
}

export function getPreviousMonthDay(selectedDate) {
  let month = selectedDate.getMonth();
  let year = selectedDate.getFullYear();

  let previousMonthDayString = "";

  if (month === 0) {
    previousMonthDayString = `${year - 1}/12/01 00:00:00`;
  } else {
    month = "" + month;
    if (month.length < 2) {
      month = "0" + month;
    }
    previousMonthDayString = `${year}/${month}/01 00:00:00`;
  }
  return new Date(previousMonthDayString);
}

export function getMonthName(selectedDate) {
  return NAMES_OF_THE_MONTH[selectedDate.getMonth()];
}

export function getDaysCurrentMonth(selectedDate) {
  const totalDaysCurrentMonth = getTotalDaysCurrentMonth(selectedDate);
  let currentDays = [];

  for (let i = 0; i < totalDaysCurrentMonth; i++) {
    currentDays.push(i + 1);
  }
  return currentDays;
}
export function getDaysPreviousMonth(selectedDate) {
  let previousDays = [];
  let day = selectedDate.getDate()-1
  let isDiferentThatZero = new Date(selectedDate - day  * MS_DAY).getDay()!== 0
  
  if (isDiferentThatZero) {
  const lastDayPreviousMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    0
  );
  const weekDayPreviousMonth = lastDayPreviousMonth.getDay();
  if (weekDayPreviousMonth < 6) {
    const firstDay = new Date(
      lastDayPreviousMonth - MS_DAY * weekDayPreviousMonth
    ).getDate();

    for (let i = 0; i <= weekDayPreviousMonth; i++) {
      previousDays.push(firstDay + i);
    }
  } else {
    previousDays.push(lastDayPreviousMonth.getDate());
  }
  }
  return previousDays;
}

export function getDaysFollowingMonth(selectedDate) {
  const nextMonthDay = getNextMonthDay(selectedDate).getDay();
  let nextDays = [];

  if (nextMonthDay !== 0) {
    for (let i = nextMonthDay; i <= 6; i++) {
      nextDays.push(i - nextMonthDay + 1);
    }
  }

  return nextDays;
}

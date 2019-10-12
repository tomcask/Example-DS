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

function getNextMonthDay(today) {
  let month = today.getMonth() + 2;
  let year = today.getFullYear();
  let nextMonthDayString = "";

  if (month == 13) {
    nextMonthDayString = `${year + 1}/01/01`;
  } else {
    month = new String(month);
    if (month.length < 2) {
      month = "0" + month;
    }
    nextMonthDayString = `${year}/${month}/01`;
  }
  return new Date(nextMonthDayString);
}

function getTotalDaysCurrentMonth(today) {
  const dayOfCurrentMonth = today.getDate();
  const nextMonthDay = getNextMonthDay(today);
  const firstDayNextMonth = new Date(nextMonthDay);
  const daysUntilNextMonth =
    Math.round((firstDayNextMonth - today) / MS_DAY) - 1;
  return dayOfCurrentMonth + daysUntilNextMonth;
}

export function getDaysCurrentMonth(today) {
  const totalDaysCurrentMonth = getTotalDaysCurrentMonth(today);
  let currentDays = [];

  for (let i = 0; i < totalDaysCurrentMonth; i++) {
    currentDays.push(i + 1);
  }

  return currentDays;
}

export function getDaysPreviousMonth(today) {
  const day = today.getDate();
  const msUntilPreviousMonth = today - day * MS_DAY;
  const lastDayPreviousMonth = new Date(msUntilPreviousMonth);
  const weekDayPreviousMonth = lastDayPreviousMonth.getDay();
  const firstDay = new Date(
    msUntilPreviousMonth - MS_DAY * weekDayPreviousMonth
  );

  let previousDays = [];
  for (let i = 0; i <= weekDayPreviousMonth; i++) {
    previousDays.push(firstDay.getDate() + i);
  }

  return previousDays;
}

export function getDaysFollowingMonth(today) {
  let nextDays = [];
  const nextMonthDay = getNextMonthDay(today).getDay();

  for (let i = nextMonthDay; i <= 6; i++) {
    nextDays.push(i - nextMonthDay + 1);
  }

  return nextDays;
}

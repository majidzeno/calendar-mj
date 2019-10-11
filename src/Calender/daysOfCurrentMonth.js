import React from "react";
import moment from "moment";
import { dayGenerator } from "./tableConstructionFunctions";
import { daysInMonth, firstDayOfMonth } from "./helperFunctions";
const constantMonth = moment().month(),
  constantYear = moment().year();
const daysOfTheCurrentMonth = (eventsLogOfThisYear, momentObject, today) => {
  let numberOfDaysInThisMonth = daysInMonth(moment()),
    blankCells = [],
    monthDaysArr = [];

  var eventsMonths = Object.keys(eventsLogOfThisYear);

  for (let i = 1; i <= numberOfDaysInThisMonth; i++) {
    if (
      constantYear === momentObject.year() &&
      eventsMonths.indexOf(momentObject.month() + "") > -1 &&
      eventsLogOfThisYear[momentObject.month()].indexOf(i) > -1 &&
      constantMonth === momentObject.month() &&
      i === today
    ) {
      monthDaysArr.push(dayGenerator("dayInMonth eventDay today", i));
    } else if (
      constantYear === momentObject.year() &&
      eventsMonths.indexOf(momentObject.month() + "") > -1 &&
      eventsLogOfThisYear[momentObject.month()].indexOf(i) > -1
    ) {
      monthDaysArr.push(dayGenerator("dayInMonth eventDay", i));
    } else if (
      i === today &&
      constantMonth === momentObject.month() &&
      constantYear === momentObject.year()
    ) {
      monthDaysArr.push(dayGenerator("dayInMonth today", i));
    } else {
      monthDaysArr.push(dayGenerator("dayInMonth", i));
    }
  }
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blankCells.push(<td className="dayInMonth empty" key={i * 200}></td>);
  }
  return (monthDaysArr = [...blankCells, ...monthDaysArr]);
};

export default daysOfTheCurrentMonth;

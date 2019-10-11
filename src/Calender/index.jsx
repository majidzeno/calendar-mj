import React, { Component } from "react";
import "./Calender.css";
import moment from "moment";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import renderEventsInCalender from "./renderEventsInCalender";
import {
  daysInMonth,
  year,
  currentDay,
  firstDayOfMonth,
  splitDaysIntoWeeks
} from "./helperFunctions";
import daysOfTheCurrentMonth from "./daysOfCurrentMonth";

const allMonthsArr = moment.months();

class Calendar extends Component {
  state = {
    currentYear: moment().year(), // 2019
    currentMonth: allMonthsArr[moment().month()], //September
    currentMonthIndex: moment().month(), //8
    numberofdaysofTheCurrentmonth: null,
    momentObj: moment(),
    today: moment().date(), //18
    // eventsArray: [],
    // showEvents: false,
    events: null
  };

  componentDidMount() {
    daysInMonth(this.state.momentObj);
    year(this.state.momentObj);
    currentDay(this.state.momentObj);
    firstDayOfMonth(this.state.momentObj);
  }

  componentDidUpdate(prevProps, prevState) {
    this.state.events &&
      daysOfTheCurrentMonth(
        renderEventsInCalender(this.props.events),
        this.state.momentObj,
        this.state.today
      );
  }

  nextMonth = () => {
    // Need Conditionals
    let currentMonthIndex = this.state.currentMonthIndex + 1;

    if (currentMonthIndex > allMonthsArr.length - 1) {
      currentMonthIndex = 0;
    }
    let currentMonth = allMonthsArr[currentMonthIndex];
    return this.setState({
      currentMonth: currentMonth,
      currentMonthIndex: currentMonthIndex,
      momentObj: this.state.momentObj.add(1, "M"),
      currentYear: year(this.state.momentObj)
    });
  };
  prevMonth = () => {
    let currentMonthIndex = this.state.currentMonthIndex - 1;
    if (currentMonthIndex < 0) {
      currentMonthIndex = allMonthsArr.length - 1;
    }
    let currentMonth = allMonthsArr[currentMonthIndex];
    return this.setState({
      currentMonth: currentMonth,
      currentMonthIndex: currentMonthIndex,
      momentObj: this.state.momentObj.subtract(1, "M"),
      currentYear: year(this.state.momentObj)
    });
  };

  renderDays = () => {
    let eventsInCalender = null;
    if (this.props.events) {
      eventsInCalender = renderEventsInCalender(this.props.events);
    }

    let weeks =
      this.props.events &&
      splitDaysIntoWeeks(
        daysOfTheCurrentMonth(
          eventsInCalender,
          this.state.momentObj,
          this.state.today
        )
      );
    let totalWeeks = [];
    weeks.map((row, i) => {
      return totalWeeks.push(<tr key={1 / (i + 1)}>{row}</tr>);
    });
    return totalWeeks.map(day => {
      return day;
    });
  };

  render() {
    const weekdayShortNames = moment.weekdaysShort();

    return (
      <div>
        <div className="monthNav">
          <div className="monthNav__iconPrev" onClick={this.prevMonth}>
            {/* <FontAwesomeIcon icon="arrow-left" /> */}
            Prev
          </div>
          <div className="monthNav__currentMonth">
            <span> {this.state.currentMonth}</span>
            <span>{this.state.currentYear}</span>
          </div>
          <div className="monthNav__iconNext" onClick={this.nextMonth}>
            {/* <FontAwesomeIcon icon="arrow-right" /> */}
            Next
          </div>
        </div>
        <table className="days">
          <thead>
            <tr className="daysHeader">
              {weekdayShortNames.map(day => {
                return <th key={day}>{day}</th>;
              })}
            </tr>
          </thead>
          <tbody className="daysBody">
            {this.props.events ? (
              this.renderDays()
            ) : (
              <tr>
                <td>Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;

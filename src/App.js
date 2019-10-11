import React from "react";
import "./App.css";
import Calender from "./Calender";
const events = {
  "4ZVboMpvWCRveLNmwuhW": {
    createdAt: 1569184941933,
    days: 4,
    errorMessage: null,
    id: 1569184941933,
    requestAvailability: true,
    start: "2019-08-01",
    end: "2019-08-05",
    title: "holiday"
  },
  myn59AMUaIX5IneyNXiH: {
    createdAt: 1568895819334,
    days: 7,
    end: "2019-09-26",
    errorMessage: null,
    id: 1568895819334,
    requestAvailability: true,
    start: "2019-09-19",
    title: "holiday"
  }
};
function App() {
  return (
    <div className="App">
      <Calender events={events} />
    </div>
  );
}

export default App;

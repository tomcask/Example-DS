import { array } from "@storybook/addon-knobs/dist/index";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MonthNavigation } from "./molecules/MonthNavigation/index";
import { WeekDays } from "./molecules/WeekDays";

ReactDOM.render(
  <>
    <MonthNavigation
      month={"January 2019"}
      onPrevious={() => {
        console.log("implemented onPrevious");
      }}
      onNext={() => {
        console.log("implemented onNext");
      }}
    />
    <WeekDays
      days={array("Days", ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"])}
    />
  </>,
  document.getElementById("root")
);

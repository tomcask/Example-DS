import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MonthNavigation } from "./molecules/MonthNavigation";

ReactDOM.render(
  <MonthNavigation
    month={"January 2019"}
    onPrevious={() => {
      console.log("implemented onPrevious");
    }}
    onNext={() => {
      console.log("implemented onNext");
    }}
  />,
  document.getElementById("root")
);

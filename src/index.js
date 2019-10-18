import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { DatePicker } from "./molecules/DatePicker";
const options = {
  input: {
    background: "white",
    fontSize: "large",
    fontColor: "black",
    formatOf: "en"
  },
  calendar: {
    border: "none",
    background: "white",
    fontSize: "large",
    fontColor: "#424242",
    shadow: "0px 0px 16px 4px rgba(0,0,0,0.5)",
    shape: "circle"
  }
};
ReactDOM.render(
  <DatePicker options={options} />,
  document.getElementById("root")
);

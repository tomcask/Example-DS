import React from "react";
import { DatePicker } from "./index";
import { withKnobs, object } from "@storybook/addon-knobs";

export default {
  title: "Molecules|DatePicker",

  parameters: {
    component: DatePicker,
    componentSubtitle:
      "Displays a component with an input field and calendar  showing the last week of the previous month and the first week of the following month"
  }
};

export const Default = () => {
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
  return <DatePicker options={object("options", options)} />;
};

Default.story = {
  decorators: [withKnobs]
};

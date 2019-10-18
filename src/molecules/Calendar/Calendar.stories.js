import React from "react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Calendar } from "./index";

export default {
  title: "Molecules|Calendar",

  parameters: {
    component: Calendar,
    componentSubtitle:
      "Displays a component with the days of the month showing then last week of the previous month and the first week of the following month"
  }
};

export const Default = () => {
  const today = new Date("2019/01/01");

  return (
    <Calendar
      day={today}
      onPrevious={action("onPrevious")}
      onNext={action("onNext")}
      visible={boolean("Visible", true)}
      border={text("border", "none")}
      background={text("background", "white")}
      fontSize={text("fontSize", "large")}
      fontColor={text("fontColor", "#424242")}
      shadow={text("shadow", "0px 0px 16px 4px rgba(0,0,0,0.5)")}
      shape={text("shape", "circle")}
    />
  );
};

Default.story = {
  decorators: [withKnobs]
};

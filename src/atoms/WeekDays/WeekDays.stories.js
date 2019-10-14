import React from "react";
import { withKnobs, array } from "@storybook/addon-knobs";
import { WeekDays } from "./index";

export default {
  title: "Molecules|Week Days",

  parameters: {
    component: WeekDays,
    componentSubtitle: "Displays a component with the days of the week"
  }
};

export const Basic = () => (
  <WeekDays
    days={array("Days", ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"])}
  />
);

Basic.story = {
  parameters: { docs: { storyDescription: "4 sizes are supported." } },
  decorators: [withKnobs]
};

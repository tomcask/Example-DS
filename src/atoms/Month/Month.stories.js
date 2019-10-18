import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Month } from "./index";

export default {
  title: "Atoms|Month",

  parameters: {
    component: Month,
    componentSubtitle:
      "Component that shows all the days of the selected month, and remaining days until completing the week of the previous and subsequent month."
  }
};

export const Default = () => (
  <Month
    day={new Date(2019, 0, 12, 0, 0, 0, 0)}
    setSelectedDay={action("select a day")}
    fontSize={select("fontSize", ["small", "medium", "large"], "medium")}
    shape={select("Shape", ["circle", "square"], "medium")}
  />
);

Default.story = {
  decorators: [withKnobs]
};

import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";
import { MonthNavigation } from "./index";

export default {
  title: "Molecules|Month Navigation",

  parameters: {
    component: MonthNavigation,
    componentSubtitle:
      "Displays a component with options to navigate between months"
  }
};

export const Basic = () => (
  <MonthNavigation
    month={text("Month", "January 2019")}
    onPrevious={action("onPrevious")}
    onNext={action("onNext")}
  />
);

Basic.story = {
  parameters: { docs: { storyDescription: "4 sizes are supported." } }
};

Basic.story = {
  decorators: [withKnobs]
};

export const Multiple = () => (
  <MonthNavigation
    month={"January 2019"}
    onPrevious={action("onPrevious")}
    onNext={action("onNext")}
  />
);

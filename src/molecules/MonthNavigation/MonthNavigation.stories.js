import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { MonthNavigation } from "./index";

export default {
  title: "Molecules|Month Navigation",

  parameters: {
    component: MonthNavigation,
    componentSubtitle:
      "Displays a component with options to navigate between months"
  }
};

export const Default = () => {
  const today = new Date();
  return (
    <MonthNavigation
      day={today}
      onPrevious={action("onPrevious")}
      onNext={action("onNext")}
    />
  );
};

Default.story = {
  decorators: [withKnobs]
};

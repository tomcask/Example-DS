import React from "react";
import { withKnobs, array } from "@storybook/addon-knobs";
import {DAYS_OF_THE_WEEK} from '../../services/dates'
import { WeekDays } from "./index";

export default {
  title: "Atoms|Week Days",

  parameters: {
    component: WeekDays,
    componentSubtitle: "Displays a component with the days of the week"
  }
};

export const Basic = () => (
  <WeekDays
    days={array("Days", DAYS_OF_THE_WEEK)}
  />
);

Basic.story = {
  parameters: { docs: { storyDescription: "4 sizes are supported." } },
  decorators: [withKnobs]
};

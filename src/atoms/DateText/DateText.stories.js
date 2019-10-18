import React from "react";
import { DateText } from "./index";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default {
  title: "Atoms|Date Text",
  parameters: {
    component: DateText,
    componentSubtitle: "Read-only input text that receives a date "
  }
};

export const Default = () => (
  <DateText
    element={{}}
    onClickHandler={action("onClick")}
    background={text("background", "white")}
    fontSize={select("fontSize", ["small", "medium", "large"], "medium")}
    fontColor={text("fontColor", "black")}
  />
);

Default.story = {
  decorators: [withKnobs]
};

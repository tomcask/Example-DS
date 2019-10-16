import React from "react";
import { withKnobs, date } from "@storybook/addon-knobs";
import { Month } from "./index";

export default {
	title: "Atoms|Month",
	
	parameters: {
		component: Month,
		componentSubtitle: "Displays a component with the days of the month showing then last week of the previous month and the first week of the following month"
	}
};

export const Basic = () => (
	<Month day={myDateKnob('2019/01/01')}/>
);

Basic.story = {
		decorators: [withKnobs]
};

function myDateKnob(name, defaultValue) {
	const stringTimestamp = date(name, defaultValue)
	return new Date(stringTimestamp)
}
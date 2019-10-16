import React from "react";
import { DatePicker } from "./index";

export default {
	title: "Molecules|DatePicker",
	
	parameters: {
		component: DatePicker,
		componentSubtitle: "Displays a component with an input field and calendar  showing the last week of the previous month and the first week of the following month"
	}
};

export const Basic = () => (
	<DatePicker
	/>
);

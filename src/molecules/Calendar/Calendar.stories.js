import React from "react";
import {withKnobs, date, boolean} from '@storybook/addon-knobs'
import { action } from "@storybook/addon-actions";
import { Calendar } from "./index";

export default {
	title: "Molecules|Calendar",
	
	parameters: {
		component: Calendar,
		componentSubtitle: "Displays a component with the days of the month showing then last week of the previous month and the first week of the following month"
	}
};


export const Basic = () =>{
	const today = new Date('2019/01/01')
	
	return <Calendar
		day={today }
		onPrevious={action("onPrevious")}
		onNext={action("onNext")}
		visible={boolean('Visible', true)}
	/>
};

Basic.story = {
	decorators: [withKnobs]
};

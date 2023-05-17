import React, {useState} from "react";
import {RatingValueType} from "../../App";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}

export const EmptyRating = () => <Select value={"1"}
                                         onChange={action("value changed")}
                                         items={[
                                             {value: 1, title: "Minsk"},
                                             {value: 2, title: "Moscow"},
                                             {value: 3, title: "Kiev"}
                                         ]}/>

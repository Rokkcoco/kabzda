import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";
import {action} from "@storybook/addon-actions";

test("collapsed should be true",() =>{
    const state: StateType = {
        collapsed: false
    }
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    expect(newState.collapsed).toBeTruthy()
})
test("collapsed should be false",() =>{
    const state: StateType = {
        collapsed: true
    }
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    expect(newState.collapsed).toBeFalsy()
})
test("reducer should throw an error",() =>{
    const state: StateType = {
        collapsed: true
    }
    expect(()=>{
        reducer(state, {type: "FAKETYPE"})
    }).toThrowError()
})
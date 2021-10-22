import { createSlice } from "@reduxjs/toolkit";

let wakeUpTime = new Date();
let lunchTime = new Date();
lunchTime.setHours(lunchTime.getHours() + 1);
let dinnerTime = new Date();
dinnerTime.setHours(dinnerTime.getHours() + 2);
let bedTime = new Date();
bedTime.setHours(bedTime.getHours() + 3);

export const slice = createSlice({
    name: "times",
    initialState: {
        wakeUp: wakeUpTime.getTime(),
        lunch: lunchTime.getTime(),
        dinner: dinnerTime.getTime(),
        bedTime: bedTime.getTime(),
    },
    reducers: {
        setWakeUp: (state, action) => {
            state.wakeUp = action.payload;
        },
        setLunch: (state, action) => {
            state.lunch = action.payload;
        },
        setDinner: (state, action) => {
            state.dinner = action.payload;
        },
        setBedTime: (state, action) => {
            state.bedTime = action.payload;
        },
    },
});

export const { setWakeUp, setLunch, setDinner, setBedTime } = slice.actions;

export const selectWakeUp = (state) => state.times.wakeUp;
export const selectLunch = (state) => state.times.lunch;
export const selectDinner = (state) => state.times.dinner;
export const selectBedTime = (state) => state.times.bedTime;

export default slice.reducer;

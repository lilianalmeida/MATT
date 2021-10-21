import { createSlice } from "@reduxjs/toolkit";

let wakeUpTime = new Date();
let lunchTime = new Date();
lunchTime.setHours(lunchTime.getHours() + 1);
let dinerTime = new Date();
dinerTime.setHours(dinerTime.getHours() + 2);
let bedTime = new Date();
bedTime.setHours(bedTime.getHours() + 3);

export const slice = createSlice({
    name: "times",
    initialState: {
        wakeUp: wakeUpTime.getTime(),
        lunch: lunchTime.getTime(),
        diner: dinerTime.getTime(),
        bedTime: bedTime.getTime(),
    },
    reducers: {
        setWakeUp: (state, action) => {
            state.wakeUp = action.payload;
        },
        setLunch: (state, action) => {
            state.lunch = action.payload;
        },
        setDiner: (state, action) => {
            state.diner = action.payload;
        },
        setBedTime: (state, action) => {
            state.bedTime = action.payload;
        },
    },
});

export const { setWakeUp, setLunch, setDiner, setBedTime } = slice.actions;

export const selectWakeUp = (state) => state.times.wakeUp;
export const selectLunch = (state) => state.times.lunch;
export const selectDiner = (state) => state.times.diner;
export const selectBedTime = (state) => state.times.bedTime;

export default slice.reducer;

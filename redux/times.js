import { createSlice } from "@reduxjs/toolkit";

const hourRegex = new RegExp(/^([01]?\d|2[0-3]):([0-5]\d)$/);

export const slice = createSlice({
    name: "times",
    initialState: {
        wakeUp: "07:00",
        lunch: "12:00",
        diner: "19:00",
        bedTime: "00:00",
    },
    reducers: {
        setWakeUp: (state, action) => {
            if (!hourRegex.test(action.payload)) return;

            state.wakeUp = action.payload;
        },
        setLunch: (state, action) => {
            if (!hourRegex.test(action.payload)) return;

            state.lunch = action.payload;
        },
        setDiner: (state, action) => {
            if (!hourRegex.test(action.payload)) return;

            state.diner = action.payload;
        },
        setBedTime: (state, action) => {
            if (!hourRegex.test(action.payload)) return;

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

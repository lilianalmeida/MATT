import { createSlice } from "@reduxjs/toolkit";

const isString = (str) => str instanceof String || typeof str === "string";

const addHabit = (arr, habit) => {
    const index = arr.indexOf(habit);

    if (index == -1 || !isString(habit)) return;

    arr.push(habit);
};

const removeHabit = (arr, habit) => {
    const index = arr.indexOf(habit);

    if (index == -1) return;

    arr.splice(index, 1);
};

export const slice = createSlice({
    name: "habits",
    initialState: {
        morning: [],
        afternoon: [],
        evening: [],
    },
    reducers: {
        // action.payload is the name of the habit, e.g. "read-news"
        addMorningHabit: (state, action) => {
            addHabit(state.morning, action.payload);
        },
        removeMorningHabit: (state, action) => {
            removeHabit(state.morning, action.payload);
        },
        addAfternoonHabit: (state, action) => {
            addHabit(state.afternoon, action.payload);
        },
        removeAfternoonHabit: (state, action) => {
            removeHabit(state.afternoon, action.payload);
        },
        addEveningHabit: (state, action) => {
            addHabit(state.evening, action.payload);
        },
        removeEveningHabit: (state, action) => {
            removeHabit(state.evening, action.payload);
        },
    },
});

export const {
    addMorningHabit,
    removeMorningHabit,
    addAfternoonHabit,
    removeAfternoonHabit,
    addEveningHabit,
    removeEveningHabit,
} = slice.actions;

export const selectMorningHabits = (state) => state.habits.morning;
export const selectAfternoonHabits = (state) => state.habits.afternoon;
export const selectEveningHabits = (state) => state.habits.evening;

export default slice.reducer;

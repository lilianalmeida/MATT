import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "settings",
    initialState: {
        name: "friend",
        gender: "unknown",
        age: "18",
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        },
    },
});

export const { setName, setGender, setAge } = slice.actions;

export const selectName = (state) => state.settings.name;
export const selectGender = (state) => state.settings.gender;
export const selectAge = (state) => state.settings.age;

export default slice.reducer;

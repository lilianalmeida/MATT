import { configureStore } from "@reduxjs/toolkit";
import timesReducer from "./times";
import habitsReducer from "./habits";
import settingsReducer from "./settings";
import AsyncStorage from "@react-native-async-storage/async-storage";

let store;

export const loadStore = async () => {
    let storedItem = await AsyncStorage.getItem("store");

    if (storedItem === null) {
        store = configureStore({
            reducer: {
                times: timesReducer,
                habits: habitsReducer,
                settings: settingsReducer,
            },
        });
    } else {
        store = configureStore({
            preloadedState: JSON.parse(storedItem),
            reducer: {
                times: timesReducer,
                habits: habitsReducer,
                settings: settingsReducer,
            },
        });
    }

    store.subscribe(
        async () =>
            await AsyncStorage.setItem(
                "store",
                JSON.stringify(store.getState())
            )
    );
};

export const getStore = () => store;

export default store;

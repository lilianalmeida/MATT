import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import { SearchBar, CheckBox } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import {
    selectAfternoonHabits,
    selectEveningHabits,
    selectMorningHabits,
    removeMorningHabit,
    removeAfternoonHabit,
    removeEveningHabit,
    addMorningHabit,
    addEveningHabit,
    addAfternoonHabit,
} from "../redux/habits";

import SettingsPagesHeader from "../components/SettingsPagesHeader";
import colors from "../config/colors";
import allHabitsTemp from "../config/data";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function AddHabitsScreen({ navigation, route }) {
    const { type } = route.params;
    const habitsList = [];
    const dispatch = useDispatch();
    let habits, deleteAction, addAction;

    switch (type) {
        case "morning":
            habits = useSelector(selectMorningHabits);
            deleteAction = removeMorningHabit;
            addAction = addMorningHabit;
            break;

        case "afternoon":
            habits = useSelector(selectAfternoonHabits);
            deleteAction = removeAfternoonHabit;
            addAction = addAfternoonHabit;
            break;

        case "evening":
            habits = useSelector(selectEveningHabits);
            deleteAction = removeEveningHabit;
            addAction = addEveningHabit;
            break;

        default:
            habits = useSelector(selectMorningHabits);
            deleteAction = removeMorningHabit;
            addAction = addMorningHabit;
            break;
    }

    for (const key in allHabitsTemp) {
        const { description } = allHabitsTemp[key];
        habitsList.push({ habitKey: key, habitDescription: description });
    }

    let [fontsLoaded] = useFonts({
        "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
        "Dosis-SemiBold": require("../assets/fonts/Dosis-SemiBold.ttf"),
    });

    const [searchedHabits, setSearchedHabits] = useState(habitsList);
    const [searchText, setSearchText] = useState("");

    const searchFilterFunction = (input) => {
        setSearchText(input);

        if (input === "") {
            setSearchedHabits(habitsList);
            return;
        }

        const newHabits = habitsList.filter(({ habitDescription }) => {
            const habitData = habitDescription.toUpperCase();
            const inputData = input.toUpperCase();

            return habitData.indexOf(inputData) > -1;
        });

        setSearchedHabits([...newHabits]);
    };

    const checkHabit = (habitKey) => {
        if (habits.includes(habitKey)) {
            dispatch(deleteAction(habitKey));
            return;
        }

        dispatch(addAction(habitKey));
    };

    return (
        <View style={styles.container}>
            <SettingsPagesHeader navigation={navigation} title="Add Habit" />
            <View style={styles.mainSection}>
                <SearchBar
                    placeholder="Search Here..."
                    lightTheme
                    round
                    value={searchText}
                    onChangeText={searchFilterFunction}
                    containerStyle={styles.searchContainer}
                    inputContainerStyle={styles.searchInputContainer}
                    inputStyle={styles.searchInput}
                    autoCorrect={false}
                />
                <ScrollView>
                    {searchedHabits.map(({ habitKey, habitDescription }) => (
                        <View key={habitKey}>
                            <TouchableWithoutFeedback
                                onPress={() => checkHabit(habitKey)}
                            >
                                <View style={styles.habit}>
                                    <CheckBox
                                        center
                                        title=""
                                        checkedIcon="circle"
                                        uncheckedIcon="circle-o"
                                        checkedColor={colors.primary}
                                        containerStyle={{ padding: 0 }}
                                        checked={habits.indexOf(habitKey) > -1}
                                    />

                                    <Text style={styles.habitText}>
                                        {habitDescription}
                                    </Text>
                                </View>
                                <View style={styles.division} />
                            </TouchableWithoutFeedback>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    mainSection: {
        paddingHorizontal: 20,
        paddingBottom: 35,
        paddingTop: 15,
    },
    habit: {
        height: 55,
        flexDirection: "row",
        alignItems: "center",
    },
    habitText: {
        fontSize: 14,
        fontFamily: "Nunito-Regular",
        color: colors.black,
    },
    division: {
        borderBottomColor: colors.mute,
        borderBottomWidth: 1,
    },
    searchContainer: {
        paddingHorizontal: 0,
        paddingTop: 15,
        backgroundColor: colors.white,
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    searchInputContainer: {
        height: 36,
        backgroundColor: "#7676801e",
    },
    searchInput: {
        fontSize: 15,
        fontFamily: "Nunito-Regular",
        color: "#3C3C43",
    },
});

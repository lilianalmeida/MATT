import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { Swipeable } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";

import SettingsPagesHeader from "../components/SettingsPagesHeader";
import PenIcon from "../assets/pen-icon.png";
import colors from "../config/colors";
import { useDispatch, useSelector } from "react-redux";
import {
    selectAfternoonHabits,
    selectEveningHabits,
    selectMorningHabits,
    addMorningHabit,
    removeMorningHabit,
    addAfternoonHabit,
    removeAfternoonHabit,
    addEveningHabit,
    removeEveningHabit,
} from "../redux/habits";
import allHabits from "../config/data";

function HabitItem({ habitKey, deleteCallback, dispatchCallback }) {
    const habitDescription = allHabits[habitKey].description;

    const leftAction = (habitKey, deleteCallback) => (
        <TouchableOpacity
            style={styles.deleteAction}
            onPress={() => dispatchCallback(deleteCallback(habitKey))}
        >
            <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
    );

    return (
        <View key={habitKey}>
            <Swipeable
                renderRightActions={() => leftAction(habitKey, deleteCallback)}
            >
                <View style={styles.habit}>
                    <Text style={styles.habitText}>{habitDescription}</Text>
                </View>
            </Swipeable>
            <View style={styles.division} />
        </View>
    );
}

function HabitMenu({ habits, deleteCallback, dispatchCallback, children }) {
    return (
        <View style={styles.timeOfDay}>
            <View style={styles.timeOfDayRow}>
                <Text style={styles.timeOfDayText}>{children}</Text>
                <TouchableOpacity
                    style={styles.timeOfDayRow}
                    onPress={() =>
                        navigation.navigate("AddHabit", {
                            chosenHabits: habits,
                        })
                    }
                >
                    <Text style={styles.timeOfDayText}>Add</Text>
                    <Icon
                        name="plus"
                        type="material-community"
                        color={colors.mute}
                        size={22}
                    />
                </TouchableOpacity>
            </View>
            {habits.map((habitKey) => (
                <HabitItem
                    key={habitKey}
                    habitKey={habitKey}
                    deleteCallback={deleteCallback}
                    dispatchCallback={dispatchCallback}
                />
            ))}
        </View>
    );
}

export default function EditRoutineScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
        "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
        "Dosis-SemiBold": require("../assets/fonts/Dosis-SemiBold.ttf"),
    });

    // State related variables
    const morningHabits = useSelector(selectMorningHabits);
    const afternoonHabits = useSelector(selectAfternoonHabits);
    const eveningHabits = useSelector(selectEveningHabits);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <SettingsPagesHeader navigation={navigation} title="Edit Routine" />
            <ScrollView>
                <View style={styles.mainSection}>
                    <HabitMenu
                        habits={morningHabits}
                        deleteCallback={removeMorningHabit}
                        dispatchCallback={dispatch}
                    >
                        Morning
                    </HabitMenu>
                    <HabitMenu
                        habits={afternoonHabits}
                        deleteCallback={removeAfternoonHabit}
                        dispatchCallback={dispatch}
                    >
                        Afternoon
                    </HabitMenu>
                    <HabitMenu
                        habits={eveningHabits}
                        deleteCallback={removeEveningHabit}
                        dispatchCallback={dispatch}
                    >
                        Evening
                    </HabitMenu>
                    <View style={styles.bottomSection}>
                        <Text style={styles.bottomText}>
                            Swipe left to delete a habit
                        </Text>
                        <Image style={styles.penIcon} source={PenIcon} />
                    </View>
                </View>
            </ScrollView>
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
        height: 46,
        justifyContent: "center",
    },
    habitText: {
        fontSize: 14,
        fontFamily: "Nunito-Regular",
        color: colors.black,
    },
    timeOfDayRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    timeOfDay: {
        paddingTop: 5,
        paddingBottom: 30,
    },
    timeOfDayText: {
        fontSize: 14,
        fontFamily: "Nunito-Regular",
        color: colors.mute,
    },
    division: {
        borderBottomColor: colors.mute,
        borderBottomWidth: 1,
    },
    bottomSection: {
        alignItems: "center",
        paddingTop: 40,
    },
    bottomText: {
        fontSize: 14,
        fontFamily: "Nunito-Regular",
        color: colors.mute,
    },
    penIcon: {
        width: 64,
        height: 64,
        marginVertical: 35,
    },
    deleteAction: {
        backgroundColor: colors.red,
        justifyContent: "center",
    },
    deleteText: {
        fontSize: 14,
        fontFamily: "Nunito-Regular",
        color: colors.white,
        paddingHorizontal: 15,
    },
});

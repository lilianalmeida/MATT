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
    removeMorningHabit,
    removeAfternoonHabit,
    removeEveningHabit,
} from "../redux/habits";
import allHabits from "../config/data";

function HabitItem({ habitKey, deleteAction, dispatchCallback }) {
    const habitDescription = allHabits[habitKey].description;

    const handleSwipe = () => (
        <TouchableOpacity
            style={styles.deleteAction}
            onPress={() => dispatchCallback(deleteAction(habitKey))}
        >
            <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
    );

    return (
        <View key={habitKey}>
            <Swipeable renderRightActions={handleSwipe}>
                <View style={styles.habit}>
                    <Text style={styles.habitText}>{habitDescription}</Text>
                </View>
            </Swipeable>
            <View style={styles.division} />
        </View>
    );
}

function HabitMenu({ type, navigation, children }) {
    let habits, deleteAction;
    const dispatch = useDispatch();

    switch (type) {
        case "morning":
            habits = useSelector(selectMorningHabits);
            deleteAction = removeMorningHabit;
            break;

        case "afternoon":
            habits = useSelector(selectAfternoonHabits);
            deleteAction = removeAfternoonHabit;
            break;

        case "evening":
            habits = useSelector(selectEveningHabits);
            deleteAction = removeEveningHabit;
            break;

        default:
            habits = useSelector(selectMorningHabits);
            deleteAction = removeMorningHabit;
            break;
    }

    return (
        <View style={styles.timeOfDay}>
            <View style={styles.timeOfDayRow}>
                <Text style={styles.timeOfDayText}>{children}</Text>
                <TouchableOpacity
                    style={styles.timeOfDayRow}
                    onPress={() =>
                        navigation.navigate("AddHabit", {
                            type: type,
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
                    deleteAction={deleteAction}
                    dispatchCallback={dispatch}
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

    return (
        <View style={styles.container}>
            <SettingsPagesHeader navigation={navigation} title="Edit Routine" />
            <ScrollView>
                <View style={styles.mainSection}>
                    <HabitMenu type={"morning"} navigation={navigation}>
                        Morning
                    </HabitMenu>
                    <HabitMenu type={"afternoon"} navigation={navigation}>
                        Afternoon
                    </HabitMenu>
                    <HabitMenu type={"evening"} navigation={navigation}>
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

import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, Platform } from "react-native";
import { useFonts } from "expo-font";
import DateTimePicker from "@react-native-community/datetimepicker";

import SettingsPagesHeader from "../components/SettingsPagesHeader";
import colors from "../config/colors";
import { useDispatch, useSelector } from "react-redux";
import {
    selectBedTime,
    selectLunch,
    selectWakeUp,
    selectDinner,
    setWakeUp,
    setLunch,
    setDinner,
    setBedTime,
} from "../redux/times";
import { TouchableOpacity } from "react-native-gesture-handler";

function TimeItem({ selector, action, children }) {
    const [showPicker, setShowPicker] = useState(Platform.OS === 'ios');

    const value = useSelector(selector);
    const valueStr = new Date(value).toLocaleString().substr(11, 5);
    const dispatch = useDispatch();

    const handleChange = (event, selectedDate) => {
        setShowPicker(Platform.OS === "ios");

        if(selectedDate === undefined) return;

        dispatch(action(selectedDate.getTime()));
    };

    return (
        <React.Fragment>
            <View style={styles.timeSection}>
                <Text style={styles.timeText}>{children}</Text>
                {showPicker && (
                    <View style={styles.timePicker}>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={new Date(value)}
                            mode="time"
                            is24Hour={true}
                            display="default"
                            onChange={handleChange}
                        />
                    </View>
                )}
                {Platform.OS === "android" && (
                    <TouchableOpacity
                        onPress={() => setShowPicker(true)}
                        style={styles.androidTimer}
                    >
                        <Text style={styles.hourText}>{valueStr}</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.division} />
        </React.Fragment>
    );
}

export default function EditRoutinesTimesScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
        "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
        "Dosis-SemiBold": require("../assets/fonts/Dosis-SemiBold.ttf"),
    });

    return (
        <View style={styles.container}>
            <SettingsPagesHeader
                navigation={navigation}
                title="Edit Routine Times"
            />
            <ScrollView>
                <View style={styles.mainSection}>
                    <TimeItem action={setWakeUp} selector={selectWakeUp}>
                        Wake Up
                    </TimeItem>
                    <TimeItem action={setLunch} selector={selectLunch}>
                        Lunch
                    </TimeItem>
                    <TimeItem action={setDinner} selector={selectDinner}>
                        Dinner
                    </TimeItem>
                    <TimeItem action={setBedTime} selector={selectBedTime}>
                        Bedtime
                    </TimeItem>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    androidTimer: {
        backgroundColor: colors.transpMute,
        paddingHorizontal: 9,
        padding: 5,
        borderRadius: 8,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    mainSection: {
        paddingHorizontal: 20,
        paddingBottom: 35,
    },
    timeSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 55,
    },
    timeText: {
        fontSize: 18,
        fontFamily: "Nunito-Regular",
        color: colors.black,
        flex: 1,
        alignSelf: "flex-end",
    },
    hourText: {
        fontSize: 18,
        fontFamily: "Nunito-Regular",
        color: colors.black,
    },
    timePicker: {
        width: 70,
    },
    division: {
        borderBottomColor: colors.mute,
        borderBottomWidth: 1,
        paddingTop: 10,
    },
});

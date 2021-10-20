import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView
} from 'react-native';
import { useFonts } from "expo-font";
import DateTimePicker from '@react-native-community/datetimepicker'

import SettingsPagesHeader from '../components/SettingsPagesHeader';
import colors from "../config/colors";

export default function EditRoutinesTimesScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
        "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
        "Dosis-SemiBold": require("../assets/fonts/Dosis-SemiBold.ttf"),
    });

    // Create states for each time of the day
    let wakeUpTimeDefault = new Date()
    wakeUpTimeDefault.setHours(7, 0, 0)
    const [wakeUpTime, setWakeUpTime] = useState(wakeUpTimeDefault);
    const [showWakeUpTime, setShowWakeUpTime] = useState(true);

    let lunchTimeDefault = new Date()
    lunchTimeDefault.setHours(12, 0, 0)
    const [lunchTime, setLunchTime] = useState(lunchTimeDefault);
    const [showLunchTime, setShowLunchTime] = useState(true);

    let dinnerTimeDefault = new Date()
    dinnerTimeDefault.setHours(18, 0, 0)
    const [dinnerTime, setDinnerTime] = useState(dinnerTimeDefault);
    const [showDinnerTime, setShowDinnerTime] = useState(true);

    let bedtimeTimeDefault = new Date()
    bedtimeTimeDefault.setHours(23, 0, 0)
    const [bedtimeTime, setBedtimeTime] = useState(bedtimeTimeDefault);
    const [showBedtimeTime, setShowBedtimeTime] = useState(true);

    // Create change events for each time of the day
    const onChangeWakeUpTime = (event, selectedDate) => {
        setShowWakeUpTime(Platform.OS === 'ios');
        setWakeUpTime(selectedDate);
    };
    const onChangeLunchTime = (event, selectedDate) => {
        setShowWakeUpTime(Platform.OS === 'ios');
        setLunchTime(selectedDate);
    };
    const onChangeDinnerTime = (event, selectedDate) => {
        setShowWakeUpTime(Platform.OS === 'ios');
        setDinnerTime(selectedDate);
    };
    const onChangeBedtimeTime = (event, selectedDate) => {
        setShowWakeUpTime(Platform.OS === 'ios');
        setBedtimeTime(selectedDate);
    };

    return (
        <View style={styles.container}>
            <SettingsPagesHeader navigation={navigation} title="Edit Routine Times"/>
            <ScrollView>
                <View style={styles.mainSection}>
                    <View style={styles.timeSection}>
                        <Text style={styles.timeText}>Wake Up</Text>
                        {showWakeUpTime && (
                            <View style={styles.timePicker}>
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={wakeUpTime}
                                    mode='time'
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChangeWakeUpTime}
                                />
                            </View>
                        )}
                    </View>
                    <View
                        style={styles.division}
                    />
                    <View style={styles.timeSection}>
                        <Text style={styles.timeText}>Lunch</Text>
                        {showLunchTime && (
                            <View style={styles.timePicker}>
                                <DateTimePicker
                                    testID="lunchTimePicker"
                                    value={lunchTime}
                                    mode='time'
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChangeLunchTime}
                                />
                            </View>
                        )}
                    </View>
                    <View
                        style={styles.division}
                    />
                    <View style={styles.timeSection}>
                        <Text style={styles.timeText}>Dinner</Text>
                        {showDinnerTime && (
                            <View style={styles.timePicker}>
                                <DateTimePicker
                                    testID="dinnerTimePicker"
                                    value={dinnerTime}
                                    mode='time'
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChangeDinnerTime}
                                />
                            </View>
                        )}
                    </View>
                    <View
                        style={styles.division}
                    />
                    <View style={styles.timeSection}>
                        <Text style={styles.timeText}>Bedtime</Text>
                        {showBedtimeTime && (
                            <View style={styles.timePicker}>
                                <DateTimePicker
                                    testID="bedtimeTimePicker"
                                    value={bedtimeTime}
                                    mode='time'
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChangeBedtimeTime}
                                />
                            </View>
                        )}
                    </View>
                    <View
                        style={styles.division}
                    />
                </View>
                <View style={{ height: 78 }} />
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    mainSection: {
        paddingHorizontal: 20,
        paddingBottom: 35
    },
    timeSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 55
    },
    timeText: {
        fontSize: 20,
        fontFamily: "Nunito-Regular",
        color: colors.black,
        flex: 1,
        alignSelf: "flex-end"
    },
    timePicker: {
        width: 70
    },
    division: {
        borderBottomColor: colors.mute,
        borderBottomWidth: 1,
        paddingTop: 10
    }
});

import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import { useFonts } from "expo-font";
import { Swipeable } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'

import SettingsPagesHeader from '../components/SettingsPagesHeader';
import PenIcon from '../assets/pen-icon.png'
import colors from "../config/colors";

export default function EditRoutineScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
        "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
        "Dosis-SemiBold": require("../assets/fonts/Dosis-SemiBold.ttf"),
    });

    const [morningHabits, setMorningHabits] = useState(["Drink Water", "Yoga", "Plan Day"])
    const [midDayHabits, setMidDayHabits] = useState(["Read a book", "Meditation", "Listen to podcasts"])
    const [eveningHabits, setEveningHabits] = useState(["Cook Lunch", "Read News", "Drink tea"])

    const deleteHabit = (habit, timeOfDayHabits, setTimeoDayHabits) => {
        let habitsCopy = timeOfDayHabits
        let habitIndex = habitsCopy.indexOf(habit)
        habitsCopy.splice(habitIndex, 1)
        setTimeoDayHabits([...habitsCopy])
    }

    const leftAction = (habit, timeOfDayHabits, setTimeoDayHabits) => (
        <TouchableOpacity style={styles.deleteAction} onPress={() => deleteHabit(habit, timeOfDayHabits, setTimeoDayHabits)}>
            <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <SettingsPagesHeader navigation={navigation} title="Edit Routine" />
            <ScrollView>
                <View style={styles.mainSection}>
                    <View style={styles.timeOfDay}>
                        <View style={styles.timeOfDayRow}>
                            <Text style={styles.timeOfDayText}>MORNINGS</Text>
                            <TouchableOpacity style={styles.timeOfDayRow} onPress={() => navigation.navigate('AddHabit', { chosenHabits: morningHabits })}>
                                <Text style={styles.timeOfDayText}>Add</Text>
                                <Icon
                                    name='plus'
                                    type='material-community'
                                    color={colors.mute}
                                    size={22}
                                />
                            </TouchableOpacity>
                        </View>
                        {morningHabits.map(habit => (
                            <View key={habit}>
                                <Swipeable renderRightActions={() => leftAction(habit, morningHabits, setMorningHabits)}>
                                    <View style={styles.habit}>
                                        <Text style={styles.habitText}>{habit}</Text>
                                    </View>
                                </Swipeable>
                                <View style={styles.division} />
                            </View>
                        ))}
                    </View>
                    <View style={styles.timeOfDay}>
                        <View style={styles.timeOfDayRow}>
                            <Text style={styles.timeOfDayText}>MID DAYS</Text>
                            <TouchableOpacity style={styles.timeOfDayRow} onPress={() => navigation.navigate('AddHabit', { chosenHabits: midDayHabits })}>
                                <Text style={styles.timeOfDayText}>Add</Text>
                                <Icon
                                    name='plus'
                                    type='material-community'
                                    color={colors.mute}
                                    size={22}
                                />
                            </TouchableOpacity>
                        </View>
                        {midDayHabits.map(habit => (
                            <View key={habit}>
                                <Swipeable renderRightActions={() => leftAction(habit, midDayHabits, setMidDayHabits)}>
                                    <View style={styles.habit}>
                                        <Text style={styles.habitText}>{habit}</Text>
                                    </View>
                                </Swipeable>
                                <View style={styles.division} />
                            </View>
                        ))}
                    </View>
                    <View style={styles.timeOfDay}>
                        <View style={styles.timeOfDayRow}>
                            <Text style={styles.timeOfDayText}>EVENINGS</Text>
                            <TouchableOpacity style={styles.timeOfDayRow} onPress={() => navigation.navigate('AddHabit', { chosenHabits: eveningHabits })}>
                                <Text style={styles.timeOfDayText}>Add</Text>
                                <Icon
                                    name='plus'
                                    type='material-community'
                                    color={colors.mute}
                                    size={22}
                                />
                            </TouchableOpacity>
                        </View>
                        {eveningHabits.map(habit => (
                            <View key={habit}>
                                <Swipeable renderRightActions={() => leftAction(habit, eveningHabits, setEveningHabits)}>
                                    <View style={styles.habit}>
                                        <Text style={styles.habitText}>{habit}</Text>
                                    </View>
                                </Swipeable>
                                <View style={styles.division} />
                            </View>
                        ))}
                    </View>
                    <View style={styles.bottomSection}>
                        <Text style={styles.bottomText}>Swipe left to delete a habit</Text>
                        <Image style={styles.penIcon} source={PenIcon} />
                    </View>
                </View>
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
        paddingBottom: 35,
        paddingTop: 15
    },
    habit: {
        height: 46,
        justifyContent: 'center'
    },
    habitText: {
        fontSize: 14,
        fontFamily: 'Nunito-Regular',
        color: colors.black,
    },
    timeOfDayRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    timeOfDay: {
        paddingTop: 5,
        paddingBottom: 30,
    },
    timeOfDayText: {
        fontSize: 13,
        fontFamily: 'Nunito-Regular',
        color: colors.mute
    },
    division: {
        borderBottomColor: colors.mute,
        borderBottomWidth: 1,
    },
    bottomSection: {
        alignItems: 'center',
        paddingTop: 40
    },
    bottomText: {
        fontSize: 14,
        fontFamily: 'Nunito-Regular',
        color: colors.mute,
    },
    penIcon: {
        width: 64,
        height: 64,
        marginVertical: 35
    },
    deleteAction: {
        backgroundColor: colors.red,
        justifyContent: 'center'
    },
    deleteText: {
        fontSize: 14,
        fontFamily: 'Nunito-Regular',
        color: colors.white,
        paddingHorizontal: 15,
    }
});

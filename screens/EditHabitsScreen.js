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

import SettingsPagesHeader from '../components/SettingsPagesHeader';
import PenIcon from '../assets/pen-icon.png'
import colors from "../config/colors";

export default function EditHabitsScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
        "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
        "Dosis-SemiBold": require("../assets/fonts/Dosis-SemiBold.ttf"),
    });

    const [habits, setHabits] = useState(["Drink Water", "Yoga", "Plan Day", "Cook Lunch", "Read News", "Drink tea", "Read a book", "Meditation"])

    const deleteHabit = (habit) => {
        let habitsCopy = habits
        let habitIndex = habitsCopy.indexOf(habit)
        habitsCopy.splice(habitIndex, 1)
        setHabits([...habitsCopy])
    }

    const leftAction = (habit) => (
        <TouchableOpacity style={styles.deleteAction} onPress={() => deleteHabit(habit)}>
            <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <SettingsPagesHeader navigation={navigation} title="Edit Habits" addHabit={true} chosenHabits={habits}/>
            <ScrollView>
                <View style={styles.mainSection}>
                    {habits.map(habit => (
                        <View key={habit}>
                            <Swipeable renderRightActions={() => leftAction(habit)}>
                                <View style={styles.habit}>
                                    <Text style={styles.habitText}>{habit}</Text>
                                </View>
                            </Swipeable>
                            <View style={styles.division} />
                        </View>
                    ))}
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
        height: 49,
        justifyContent: 'center'
    },
    habitText: {
        fontSize: 14,
        fontFamily: 'Nunito-Regular',
        color: colors.black,
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

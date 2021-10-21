import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import { useFonts } from "expo-font";
import { SearchBar, CheckBox } from 'react-native-elements';


import SettingsPagesHeader from '../components/SettingsPagesHeader';
import colors from "../config/colors";

export default function EditHabitsScreen({ navigation, route }) {
    const { chosenHabits } = route.params;

    let [fontsLoaded] = useFonts({
        "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
        "Dosis-SemiBold": require("../assets/fonts/Dosis-SemiBold.ttf"),
    });

    const allHabits = ["Drink Water", "Yoga", "Plan Day", "Cook Lunch", "Read News", "Drink tea", "Read a book", "Meditation", "Listen to podcasts", "Listen to radio"]
    const [selectedHabits, setSelectedHabitsHabits] = useState(chosenHabits)
    const [searchedHabits, setSearchedHabits] = useState(allHabits)
    const [searchText, setSearchText] = useState("")

    const searchFilterFunction = input => {
        setSearchText(input)
        const newHabits = allHabits.filter(habit => {
            const habitData = habit.toUpperCase();
            const inputData = input.toUpperCase();

            return habitData.indexOf(inputData) > -1;
        });

        setSearchedHabits([...newHabits]);
    };

    const checkHabit = (habit) => {
        const habitIndex = selectedHabits.indexOf(habit)
        let habitsCopy = selectedHabits

        if (habitIndex > -1) {
            habitsCopy.splice(habitIndex, 1)
        } else {
            habitsCopy.push(habit)
        }

        setSelectedHabitsHabits([...habitsCopy])
    }

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
                    {searchedHabits.map(habit => (
                        <View key={habit}>
                            <TouchableWithoutFeedback
                                onPress={() => checkHabit(habit)}
                            >
                                <View style={styles.habit}>
                                    <CheckBox
                                        center
                                        title=''
                                        checkedIcon='circle'
                                        uncheckedIcon='circle-o'
                                        checkedColor={colors.primary}
                                        containerStyle={{ padding: 0 }}
                                        checked={selectedHabits.indexOf(habit) > -1}
                                    />
                                    <Text style={styles.habitText}>{habit}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={styles.division} />
                        </View>
                    ))}
                </ScrollView>
            </View>
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
        height: 55,
        flexDirection: 'row',
        alignItems: 'center'
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
    searchContainer: {
        paddingHorizontal: 0,
        paddingTop: 15,
        backgroundColor: colors.white,
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    searchInputContainer: {
        height: 36,
        backgroundColor: '#7676801e',
    },
    searchInput: {
        fontSize: 15,
        fontFamily: 'Nunito-Regular',
        color: "#3C3C43"
    },
});

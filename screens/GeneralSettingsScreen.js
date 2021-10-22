import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    TextInput,
} from 'react-native';
import { useFonts } from "expo-font";
import RNPickerSelect from 'react-native-picker-select';
import { Icon } from 'react-native-elements'
import { useDispatch, useSelector } from "react-redux";

import {
    selectName,
    selectGender,
    selectAge,
    setName,
    setGender,
    setAge,
} from "../redux/settings";
import SettingsPagesHeader from '../components/SettingsPagesHeader';
import colors from "../config/colors";

export default function GeneralSettingsScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
        "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
        "Dosis-SemiBold": require("../assets/fonts/Dosis-SemiBold.ttf"),
    });

    let name = useSelector(selectName);
    let age = useSelector(selectAge);
    let gender = useSelector(selectGender);
    const dispatch = useDispatch();

    const setSettings = (setAction, newValue) => {
        dispatch(setAction(newValue))
    }

    return (
        <View style={styles.container}>
            <SettingsPagesHeader navigation={navigation} title="General Settings" />
            <ScrollView>
                <View style={styles.mainSection}>
                    <View style={styles.inputSection}>
                        <Text style={styles.inputText}>Name</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Type here"
                            onChangeText={text => setSettings(setName, text)}
                            defaultValue={name}
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <Text style={styles.inputText}>Gender</Text>
                        <RNPickerSelect
                            textInputProps={{ fontSize: 13.7, color: colors.black }}
                            fixAndroidTouchableBug={true}
                            useNativeAndroidPickerStyle={false}
                            style={{
                                inputIOS: styles.input,
                                inputAndroid: styles.input,
                            }}
                            placeholder={{
                                label: 'Select an option...',
                                value: null,
                                color: colors.black,
                            }}
                            value={gender}
                            Icon={() => {
                                return (
                                    <View style={styles.dropdownIcon}>
                                        <Icon
                                            name='chevron-down'
                                            type='material-community'
                                            color={colors.black}
                                            size={27}
                                        />
                                    </View>
                                );
                            }}
                            onValueChange={(option) => setSettings(setGender, option)}
                            items={[{ label: 'Feminine', value: 'feminine' }, { label: 'Masculine', value: 'masculine' }, { label: 'Prefer not to say', value: 'unknown' }]}
                        />

                    </View>
                    <View style={styles.inputSection}>
                        <Text style={styles.inputText}>Age</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Type here"
                            keyboardType="number-pad"
                            onChangeText={number => setSettings(setAge, number)}
                            defaultValue={age}
                        />
                    </View>
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
    inputSection: {
        paddingTop: 30
    },
    inputText: {
        paddingBottom: 9,
        paddingLeft: 5,
        fontSize: 18,
        fontFamily: "Nunito-Regular",
        color: colors.black,
    },
    input: {
        padding: 8,
        borderRadius: 17,
        backgroundColor: "#7676801e",
        paddingHorizontal: 13,
        fontSize: 14,
        fontFamily: "Nunito-Regular",
        color: colors.black,
    },
    dropdownIcon: {
        marginRight: 7,
        marginLeft: 7,
        marginTop: 5,
    },

});

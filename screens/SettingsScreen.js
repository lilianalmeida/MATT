import React from "react";
import {
    Text,
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    Touchable,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import { Icon } from "react-native-elements";

import MattLogo from "../assets/doggo-circle.png";
import colors from "../config/colors";

export default function SettingsScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
        "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
        "Nunito-SemiBold": require("../assets/fonts/Nunito-SemiBold.ttf"),
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name="chevron-left"
                        type="material-community"
                        color={colors.dark}
                        size={37}
                    />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.mainSection}>
                    <TouchableOpacity
                        style={styles.settingButton}
                        onPress={() => navigation.navigate("Loading")}
                    >
                        <View>
                            <Text style={styles.settingTitle}>
                                General Settings
                            </Text>
                            <Text style={styles.settingDescription}>
                                Change the general setting on the app
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingButton}
                        onPress={() => navigation.navigate("EditHabits")}
                    >
                        <View>
                            <Text style={styles.settingTitle}>Edit Habits</Text>
                            <Text style={styles.settingDescription}>
                                Add, view and remove your habits
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingButton}
                        onPress={() => navigation.navigate("EditRoutine")}
                    >
                        <View>
                            <Text style={styles.settingTitle}>
                                Edit Routine
                            </Text>
                            <Text style={styles.settingDescription}>
                                Change when you want to perform you habits
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingButton}
                        onPress={() => navigation.navigate("EditRoutinesTimes")}
                    >
                        <View>
                            <Text style={styles.settingTitle}>
                                Edit Routine Times
                            </Text>
                            <Text style={styles.settingDescription}>
                                Change time for your routine
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingButton}>
                        <View>
                            <Text style={styles.settingTitle}>
                                About Us
                            </Text>
                            {/* <Text style={styles.settingDescription}>
                                Read a little about us
                            </Text> */}
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={styles.bottomSection}>
                <Image style={styles.logoImage} source={MattLogo} />
                <Text style={styles.mattText}>MATT © 2021</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 40,
    },
    linearGradient: {
        width: "100%",
        height: "100%",
    },
    header: {
        backgroundColor: "white",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    mainSection: {
        paddingHorizontal: 25,
        paddingBottom: 35,
    },
    settingButton: {
        marginTop: 35,
        justifyContent: "center",
    },
    settingTitle: {
        fontSize: 24,
        fontFamily: "Nunito-Bold",
        color: colors.dark,
        paddingBottom: 1,
    },
    settingDescription: {
        fontSize: 14,
        fontFamily: "Nunito-Regular",
        color: colors.mute,
        paddingTop: 1,
    },
    backButton: {
        width: 35,
        paddingTop: 2,
    },
    backText: {
        color: colors.dark,
        fontSize: 14,
        fontFamily: "Nunito-Regular",
        textAlign: "center",
    },
    bottomSection: {
        marginBottom: 15,
        alignItems: "center",
    },
    logoImage: {
        height: 49,
        width: 36,
    },
    mattText: {
        marginTop: 10,
        color: colors.mute,
        fontSize: 14,
        fontFamily: "Nunito-Regular",
    },
});

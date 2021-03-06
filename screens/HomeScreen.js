import React, { useEffect, useState } from "react";
import {
    Text,
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ScrollView,
    Linking,
    Dimensions,
    Platform,
} from "react-native";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { useSelector } from "react-redux";

import {
    selectName,
} from "../redux/settings";
import {
    selectLunch,
    selectWakeUp,
    selectDinner,
} from "../redux/times";
import MattLogo from "../assets/doggo-circle.png";
import MattBark from "../assets/doggo-circle-bark.png";
import NewspaperIcon from "../assets/newspaper-icon.png";
import ChecklistIcon from "../assets/checklist-icon.png";
import MeditateIcon from "../assets/meditate-icon.png";
import TeaCupIcon from "../assets/tea-cup-icon.png";
import CogwheelIcon from "../assets/cogwheel-icon.png";
import colors from "../config/colors";

export default function HomeScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
        "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
        "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
        "Dosis-SemiBold": require("../assets/fonts/Dosis-SemiBold.ttf"),
    });
    const [opacity, setOpacity] = useState(0);
    const barkingInterval = 400;
    const [welcomePhrase, setWelcomePhrase] = useState("")
    const [questionPhrase, setQuestionPhrase] = useState("")

    let name = useSelector(selectName);
    let wakeUpDate = useSelector(selectWakeUp);
    let lunchDate = useSelector(selectLunch);
    let dinnerDate = useSelector(selectDinner);

    const barkAnimation = () => {
        setOpacity(1);
        setTimeout(() => setOpacity(0), barkingInterval);
    };

    const setDataAccordingToTime = () => {
        let wakeUpTime = new Date(wakeUpDate)
        wakeUpTime = ("0" + wakeUpTime.getHours()).slice(-2) + ":" + ("0" + wakeUpTime.getMinutes()).slice(-2);

        let lunchTime = new Date(lunchDate)
        lunchTime = ("0" + lunchTime.getHours()).slice(-2) + ":" + ("0" + lunchTime.getMinutes()).slice(-2);

        let dinnerTime = new Date(dinnerDate)
        dinnerTime = ("0" + dinnerTime.getHours()).slice(-2) + ":" + ("0" + dinnerTime.getMinutes()).slice(-2);

        let today = new Date();
        let timeNow = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2);

        if (timeNow >= wakeUpTime && timeNow < lunchTime) {
            setWelcomePhrase("Good Morning")
            setQuestionPhrase("this morning")
        } else if (timeNow >= lunchTime && timeNow < dinnerTime) {
            setWelcomePhrase("Good Afternoon")
            setQuestionPhrase("this afternoon")
        } else {
            setWelcomePhrase("Good Evening")
            setQuestionPhrase("tonight")
        }
    }

    useEffect(() => {
        setTimeout(barkAnimation, barkingInterval);
        setDataAccordingToTime();
    }, [wakeUpDate, lunchDate, dinnerDate]);

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                end={{ x: 1, y: 0 }}
                start={{ x: 0, y: 1 }}
                colors={[colors.primary, colors.secondary]}
                style={styles.linearGradient}
            >
                <View style={styles.headerWrapper}>
                    <View style={styles.header}>
                        <View style={{ width: 88.7 }} />
                        <Image
                            style={[
                                styles.logoImage,
                                styles.barkImage,
                                {
                                    display: opacity ? "flex" : "none",
                                },
                            ]}
                            source={MattBark}
                        />
                        <TouchableWithoutFeedback onPress={barkAnimation}>
                            <Image
                                style={[
                                    styles.logoImage,
                                    { display: opacity ? "none" : "flex" },
                                ]}
                                source={MattLogo}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableOpacity
                            style={styles.settingsButton}
                            onPress={() => navigation.navigate("Settings")}
                        >
                            <Text style={styles.settingsText}>Settings</Text>
                            <Image source={CogwheelIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.mainSection}>
                        <Text style={styles.welcomeText}>
                            {welcomePhrase}, {name}!
                        </Text>
                        <Text style={styles.descriptionText}>
                            What are you up to {questionPhrase}?
                        </Text>
                        <View style={styles.suggestionsSection}>
                            <View style={styles.suggestionsRow}>
                                <TouchableOpacity
                                    style={styles.suggestion}
                                    onPress={() =>
                                        Linking.openURL(
                                            "https://news.google.com/topstories"
                                        )
                                    }
                                >
                                    <Image
                                        style={styles.suggestionIcon}
                                        source={NewspaperIcon}
                                    />
                                    <Text style={styles.suggestionText}>
                                        Reading news
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.suggestion}
                                    onPress={() =>
                                        Linking.openURL(
                                            "https://www.calm.com"
                                        )
                                    }
                                >
                                    <Image
                                        style={styles.suggestionIcon}
                                        source={MeditateIcon}
                                    />
                                    <Text style={styles.suggestionText}>
                                        Meditate
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.suggestionsRow}>
                                <TouchableOpacity
                                    style={styles.suggestion}
                                    onPress={() =>
                                        Linking.openURL(
                                            "https://www.google.com/search?client=firefox-b-d&q=breakfast+recipes"
                                        )
                                    }
                                >
                                    <Image
                                        style={styles.suggestionIcon}
                                        source={TeaCupIcon}
                                    />
                                    <Text style={styles.suggestionText}>
                                        Preparing breakfast
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.suggestion}
                                    onPress={() => {
                                        if (Platform.OS === "ios") {
                                            Linking.openURL("mobilenotes://");
                                            return;
                                        }
                                        Linking.openURL("https://www.rapidtables.com/tools/notepad.html");
                                    }}
                                >
                                    <Image
                                        style={styles.suggestionIcon}
                                        source={ChecklistIcon}
                                    />
                                    <Text style={styles.suggestionText}>
                                        Checking my day
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
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
        // height: 165,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        // iOS shadow
        shadowColor: colors.black,
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        // Android shadow
        elevation: 8,
    },
    headerWrapper: {
        overflow: "hidden",
        paddingBottom: 10,
    },
    logoImage: {
        height: 98,
        width: 72,
        resizeMode: "stretch",
        alignSelf: "center",
        marginTop: 30,
        marginBottom: 30,
    },
    barkImage: {
        height: 98,
        width: 100,
        left: -9,
        top: 2,
    },
    settingsButton: {
        paddingTop: 25,
        justifyContent: "center",
        flexDirection: "row",
    },
    settingsText: {
        paddingRight: 10,
        paddingTop: 3,
        fontSize: 14,
        fontFamily: "Nunito-Regular",
        color: colors.dark,
    },
    mainSection: {
        margin: 22,
        marginTop: 12,
        paddingHorizontal: 30,
    },
    welcomeText: {
        color: "white",
        fontSize: 36,
        fontFamily: "Dosis-SemiBold",
        alignSelf: "center",
        paddingTop: 40,
        paddingBottom: 10,
        textAlign: 'center'
    },
    descriptionText: {
        color: "white",
        alignSelf: "center",
        fontSize: 18,
        fontFamily: "Nunito-Bold",
    },
    suggestionsSection: {
        paddingTop: 50,
    },
    suggestionsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    suggestion: {
        backgroundColor: "white",
        width: Dimensions.get("window").width / 2 - 75,
        height: Dimensions.get("window").width / 2 - 75,
        marginBottom: 37.5,
        borderRadius: 17,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        // iOS shadow
        shadowColor: colors.black,
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        // Android shadow
        elevation: 8,
    },
    suggestionText: {
        fontSize: 14,
        fontFamily: "Nunito-Regular",
        color: colors.dark,
        textAlign: "center",
    },
    suggestionIcon: {
        width: 55,
        height: 55,
        marginBottom: 15,
    },
});

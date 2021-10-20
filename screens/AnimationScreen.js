import React, { useEffect, useRef, useState } from "react";
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    Image,
    Animated,
    Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import colors from "../config/colors";
import MattGIF from "../assets/corgi-no-bg.gif";

function AnimationScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
        "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
        "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
        "Dosis-SemiBold": require("../assets/fonts/Dosis-SemiBold.ttf"),
    });

    const animatedHeaderValue = useRef(new Animated.Value(0)).current;
    const animatedDogValue = useRef(new Animated.Value(0)).current;
    const windowHeight = Dimensions.get("window").height;
    const windowWidth = Dimensions.get("window").width;

    const headerAnimDuration = 3000;
    const dogAnimDuration = 1500;

    const [opacity, setOpacity] = useState(1);

    // navigation.replace("Home");
    useEffect(() => {
        Animated.stagger(700 ,[
            Animated.timing(animatedHeaderValue, {
                toValue: 2,
                duration: headerAnimDuration,
                useNativeDriver: true,
            }),
            Animated.timing(animatedDogValue, {
                toValue: 1,
                duration: dogAnimDuration,
                useNativeDriver: true,
            }),
        ]).start(() => navigation.replace("Home"));
    }, []);

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
                <Animated.View
                    style={[
                        styles.headerWrapper,
                        {
                            transform: [
                                {
                                    translateY: animatedHeaderValue.interpolate(
                                        {
                                            inputRange: [0, 2],
                                            outputRange: [0, - windowHeight * 0.75 - 19],
                                        }
                                    ),
                                },
                            ],
                        },
                    ]}
                >
                    <View style={styles.header}></View>
                    <Text style={styles.welcomeText}>Good Evening, Clara!</Text>
                </Animated.View>
                <Animated.Image
                    style={[
                        styles.corgi,
                        {
                            transform: [
                                {
                                    translateX: animatedDogValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, -windowWidth / 2 - 96],
                                    }),
                                },
                            ],
                        },
                    ]}
                    source={MattGIF}
                />
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
    corgi: {
        height: 200,
        width: 191,
        position: "absolute",
        top: "10%",
        alignSelf: "center",
        zIndex: 2,
    },
    corgiSplash: {
        height: 200,
        width: 157,
        position: "absolute",
        top: "10%",
        left: "36%",
        alignSelf: "center",
        zIndex: 2,
    },
    header: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
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
        flex: 1,
        zIndex: 1,
    },
    linearGradient: {
        width: "100%",
        height: "100%",
    },
    welcomeText: {
        color: "white",
        fontSize: 36,
        fontFamily: "Dosis-SemiBold",
        alignSelf: "center",
        marginTop: 62,
    },
});

export default AnimationScreen;

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
import MattLooking from "../assets/doggo-looking.png";

function AnimationScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
        "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
        "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
        "Dosis-SemiBold": require("../assets/fonts/Dosis-SemiBold.ttf"),
    });

    const animation1Value = useRef(new Animated.Value(0)).current;
    const animation2Value = useRef(new Animated.Value(0)).current;
    const windowHeight = Dimensions.get("window").height;
    const animationDuration = 3000;

    useEffect(() => {
        // navigation.replace("Home");
        Animated.stagger(2000, [
            Animated.timing(animation1Value, {
                toValue: 1,
                duration: animationDuration,
                useNativeDriver: true,
            }),
            Animated.timing(animation2Value, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start();
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
                                    scaleY: animation1Value.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0.5],
                                    }),
                                },
                                {
                                    translateY: animation1Value.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, - windowHeight / 2],
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    <View style={styles.header}></View>
                </Animated.View>
                <Animated.Image
                    style={[
                        styles.corgi,
                        {
                            opacity: animation2Value.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 0],
                            }),
                        },
                    ]}
                    source={MattGIF}
                />
                {/* <Image
                    style={[styles.corgiSplash, { opacity: 1 - opacity }]}
                    source={MattLooking}
                /> */}
                <Text style={styles.welcomeText}>Good Evening, Clara!</Text>
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
        overflow: "hidden",
        paddingBottom: 30,
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
        position: "absolute",
        bottom: "25%",
    },
});

export default AnimationScreen;

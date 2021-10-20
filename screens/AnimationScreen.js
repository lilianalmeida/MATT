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

    const animatedHeight = useRef(new Animated.Value(0)).current;
    const windowHeight = Dimensions.get("window").height;
    const animationDuration = 3000;

    useEffect(() => {
        Animated.timing(animatedHeight, {
            toValue: 1,
            duration: animationDuration,
            useNativeDriver: false,
        }).start();
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
                                    scaleY: animatedHeight.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0.5],
                                    }),
                                },
                                {
                                    translateY: animatedHeight.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, -windowHeight/2],
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    <View style={styles.header}></View>
                </Animated.View>
                <Image style={styles.corgi} source={MattGIF} />
                {/* <Image style={styles.corgiSplash} source={MattGIF} /> */}
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

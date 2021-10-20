import React from "react";
import { View, StyleSheet, SafeAreaView, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";

import MattGIF from "../assets/corgi-no-bg.gif";

function AnimationScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                end={{ x: 1, y: 0 }}
                start={{ x: 0, y: 1 }}
                colors={[colors.primary, colors.secondary]}
                style={styles.linearGradient}
            >
                <View style={styles.header}>
                    <Image style={styles.corgi} source={MattGIF} />
                </View>
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
        height: 244,
        width: 244,
    },
    header: {
        // height: 165,
        backgroundColor: "white",
        alignItems: "center",
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
    linearGradient: {
        width: "100%",
        height: "100%",
    },
});

export default AnimationScreen;

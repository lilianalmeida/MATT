import React from "react";
import { StyleSheet, SafeAreaView, View, Image, Text } from "react-native";
import LoadingDots from "react-native-loading-dots";

import MattGIF from "../assets/corgi-no-bg.gif";
import colors from "../config/colors";

export default function LoadingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.gif} source={MattGIF} />
            <LoadingDots
                colors={[colors.secondary, colors.secondary, colors.secondary, colors.secondary, colors.secondary]}
                size={10}
                dots={5}
                bounceHeight={10}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    gif: {
        width: 150,
        height: 150,
        marginBottom: 30,
    },
});

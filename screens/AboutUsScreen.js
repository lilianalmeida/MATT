import React from "react";
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Image,
    Linking,
} from "react-native";

import SettingsPagesHeader from "../components/SettingsPagesHeader";
import colors from "../config/colors";
import DoggoBark from "../assets/doggo-bark.png";
import { useFonts } from "expo-font";

function AboutUsScreen({ navigation }) {
    const [fontsLoaded] = useFonts({
        "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
    });

    return (
        <View style={styles.container}>
            <SettingsPagesHeader navigation={navigation} title="About Us" />
            <ScrollView style={styles.body}>
                <Text style={styles.text}>
                    This application was developed to help fight today's
                    motivational troubles. It is easy to become absorbed into
                    your phone with everything that is going on online and, as
                    such, we wanted to created a digital buddy to help you fight
                    the inertia of procrastination.
                </Text>
                <Text style={styles.text}>
                    Motivational App for Today's Troubles, a.k.a MATT, was the
                    name we chose for this buddy. A cute dog that is happy to
                    talk to you and recommend you stuff you like!
                </Text>
                <Text style={styles.text}>
                    The dog images and animations were produced by Han Lee (
                    {
                        <Text
                            style={styles.link}
                            onPress={() =>
                                Linking.openURL("https://dribbble.com/leeh782")
                            }
                        >
                            check out his Dribble profile
                        </Text>
                    }
                    ).
                </Text>
                <Text style={styles.text}>
                    This app was made with love by three fellow students -
                    Hanna, Liliana and Carlos - as a project for the course
                    Mobile Computing: Design and Implementation given in
                    Chalmers University of Technology. Checkout our{" "}
                    {
                        <Text
                            style={styles.link}
                            onPress={() =>
                                Linking.openURL(
                                    "https://github.com/lilianalmeida/MATT"
                                )
                            }
                        >
                            GitHub repository
                        </Text>
                    }{" "}
                    :)
                </Text>
                <Image style={styles.image} source={DoggoBark} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    image: {
        height: 209,
        width: 191,
        alignSelf: "center",
        marginTop: 30,
        marginBottom: 60,
    },
    text: {
        fontSize: 14,
        fontFamily: "Nunito-Regular",
        color: colors.dark,
        marginBottom: 13,
    },
    link: {
        color: "blue",
    },
    body: {
        padding: 30,
    },
});

export default AboutUsScreen;

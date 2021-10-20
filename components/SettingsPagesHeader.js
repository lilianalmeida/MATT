import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';

import colors from "../config/colors";

export default function SettingsPagesHeader({ navigation, title }) {
    return (<View style={styles.header}>
        <LinearGradient
            end={{ x: 0, y: 0 }}
            start={{ x: 0, y: 1 }}
            colors={[colors.primary, colors.secondary]}
            style={styles.linearGradient}
        >
            <View style={styles.headerRow}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon
                        name='chevron-left'
                        type='material-community'
                        color={colors.white}
                        size={37}
                    />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{title}</Text>
                <View style={{ width: 35.7 }} />
            </View>
        </LinearGradient>
    </View>)
}


const styles = StyleSheet.create({
    linearGradient: {
        width: '100%',
        height: '100%',
    },
    header: {
        height: 108,
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
    headerRow: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    headerTitle: {
        fontSize: 34,
        fontFamily: "Dosis-SemiBold",
        color: colors.white,
        fontWeight: '600'
    },
    backButton: {
        width: 35,
        paddingTop: 2,
    },
    backText: {
        color: colors.white,
        fontSize: 14,
        fontFamily: "Nunito-Regular",
    },
});

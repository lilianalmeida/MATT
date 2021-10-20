import React from 'react';
import {
    Text,
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    Touchable,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Icon } from 'react-native-elements'

import MattLogo from '../assets/doggo-circle.png'


export default function SettingsScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Icon
                            name='chevron-left'
                            type='material-community'
                            color='#4F3130'
                            size={37}
                        />
                        <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.mainSection}>
                        <TouchableOpacity style={styles.settingButton} onPress={() => navigation.navigate('Loading')}>
                            <View>
                                <Text style={styles.settingTitle}>General Settings</Text>
                                <Text style={styles.settingDescription}>Change the general setting on the app</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingButton}>
                            <View>
                                <Text style={styles.settingTitle}>Edit Habits</Text>
                                <Text style={styles.settingDescription}>Add, view and remove your habits</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingButton}>
                            <View>
                                <Text style={styles.settingTitle}>Edit Routines</Text>
                                <Text style={styles.settingDescription}>Change when you want to perform you habits</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingButton} onPress={() => navigation.navigate('EditRoutinesTimes')}>
                            <View>
                                <Text style={styles.settingTitle}>Edit Routine Times</Text>
                                <Text style={styles.settingDescription}>Change time for your routine</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingButton}>
                            <View>
                                <Text style={styles.settingTitle}>Privacy Policy</Text>
                                <Text style={styles.settingDescription}>Read our privacy policy</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomSection}>
                        <Image style={styles.logoImage} source={MattLogo} />
                        <Text style={styles.mattText}>MATT © 2021</Text>
                    </View>
                    <View style={{height: 78}}/>
                </ScrollView>
            </SafeAreaView >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollContainer: {
        // height: '100%'
    },
    linearGradient: {
        width: '100%',
        height: '100%',
    },
    header: {
        height: 68,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 10
    },
    mainSection: {
        paddingHorizontal: 25,
        paddingBottom: 35
    },
    settingButton: {
        marginTop: 35,
        justifyContent: 'center'
    },
    settingTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#4F3130',
        paddingBottom: 1
    },
    settingDescription: {
        fontSize: 15,
        fontWeight: '400',
        color: '#979797',
        paddingTop: 1
    },
    backButton: {
        width: 35,
        paddingTop: 2,
    },
    backText: {
        color: "#4F3130",
        fontSize: 14
    },
    bottomSection: {
        marginTop: 35,
        marginBottom: 55,
        alignItems: 'center',
    },
    logoImage: {
        height: 98,
        width: 72,
    },
    mattText: {
        marginTop: 10,
        color: "#979797",
        fontSize: 14
    }
});

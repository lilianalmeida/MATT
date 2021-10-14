import React from 'react';
import {
    Text,
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    Touchable,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements'

import MattLogo from '../assets/logo.png'
import Avatar from '../assets/avatar_female.jpg'
import { NavigationContainer } from '@react-navigation/native';


export default function SettingsScreen({navigation}) {

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Icon
                            name='chevron-left'
                            type='material-community'
                            color='#434343'
                            size={37}
                        />
                    </TouchableOpacity>
                    <Image style={styles.logoImage} source={MattLogo} />
                    <View style={styles.backButton} />
                </View>
                <View style={styles.mainSection}>
                    <View style={styles.userSection}>
                        <Image style={styles.avatar} source={Avatar} />
                        <View>
                            <Text style={styles.userName}>Clara Wilson</Text>
                            <Text style={styles.userEmail}>clara.wilson@gmail.com</Text>
                        </View>
                    </View>

                    <View
                        style={{
                            borderBottomColor: '#979797',
                            borderBottomWidth: 1,
                            paddingTop: 25,
                        }}
                    />
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
                    <TouchableOpacity style={styles.settingButton}>
                        <View>
                            <Text style={styles.settingTitle}>Privacy Policy</Text>
                            <Text style={styles.settingDescription}>Read our privacy policy</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    linearGradient: {
        width: '100%',
        height: '100%',
    },
    header: {
        height: 68,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    logoImage: {
        height: 40,
        width: 130,
        resizeMode: 'stretch'
    },
    userSection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        height: 44,
        width: 44,
        borderRadius: 22,
        marginRight: 20
    },
    mainSection: {
        padding: 25,
    },
    userName: {
        fontSize: 15,
        fontWeight: '700',
        color: '#000',
        paddingBottom: 3
    },
    userEmail: {
        fontSize: 15,
        fontWeight: '400',
        color: '#979797',
        paddingTop: 3
    },
    settingButton: {
        marginTop: 40,
        justifyContent: 'center'
    },
    settingTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
        paddingBottom: 1
    },
    settingDescription: {
        fontSize: 15,
        fontWeight: '400',
        color: '#979797',
        paddingTop: 1
    },
    backButton: {
        width: 25,
        paddingTop: 2
    }
});

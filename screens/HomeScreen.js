import React from 'react';
import {
    Text,
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    Touchable,
    TouchableOpacity,
    ScrollView,
    Linking,
    Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements'


import MattLogo from '../assets/doggo-circle.png'
import NewspaperIcon from '../assets/newspaper-icon.png'
import ChecklistIcon from '../assets/checklist-icon.png'
import DumbbellIcon from '../assets/dumbbell-icon.png'
import TeaCupIcon from '../assets/tea-cup-icon.png'
import CogwheelIcon from '../assets/cogwheel-icon.png'

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <LinearGradient
                    end={{ x: 1, y: 0 }}
                    start={{ x: 0, y: 1 }}
                    colors={['#FA565D', '#FBB35C']}
                    style={styles.linearGradient}
                >
                    <View style={styles.header}>
                        <View style={{ width: 88.7 }} />
                        <Image style={styles.logoImage} source={MattLogo} />
                        <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('Settings')}>
                            <Text style={styles.settingsText}>Settings</Text>
                            <Image source={CogwheelIcon}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <View style={styles.mainSection}>
                            <Text style={styles.welcomeText}>Good Evening, Clara!</Text>
                            <Text style={styles.descriptionText}>What are you up to this morning?</Text>
                            <View style={styles.suggestionsSection}>
                                <View style={styles.suggestionsRow}>
                                    <TouchableOpacity style={styles.suggestion} onPress={() => Linking.openURL('instagram://user?username=wearehutt')}>
                                        <Image style={styles.suggestionIcon} source={NewspaperIcon} />
                                        <Text style={styles.suggestionText}>Reading news</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.suggestion}>
                                        <Image style={styles.suggestionIcon} source={DumbbellIcon} />
                                        <Text style={styles.suggestionText}>Morning exercise</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.suggestionsRow}>
                                    <TouchableOpacity style={styles.suggestion}>
                                        <Image style={styles.suggestionIcon} source={TeaCupIcon} />
                                        <Text style={styles.suggestionText}>Preparing breakfast</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.suggestion}>
                                        <Image style={styles.suggestionIcon} source={ChecklistIcon} />
                                        <Text style={styles.suggestionText}>Checking my day</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </LinearGradient>
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
        height: 165,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    logoImage: {
        height: 98,
        width: 72,
        resizeMode: 'stretch',
        alignSelf: 'center'
    },
    settingsButton: {
        paddingTop: 25,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    settingsText: {
        paddingRight: 10,
        paddingTop: 3,
        fontSize: 14,
        color: '#4F3130',
    },
    mainSection: {
        margin: 22,
        paddingHorizontal: 30
    },
    welcomeText: {
        color: 'white',
        fontSize: 33,
        fontWeight: '600',
        alignSelf: 'center',
        paddingTop: 40,
        paddingBottom: 10
    },
    descriptionText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 18,
    },
    suggestionsSection: {
        paddingTop: 50
    },
    suggestionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    suggestion: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width / 2 - 75,
        height: Dimensions.get('window').width / 2 - 75,
        marginBottom: 37.5,
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        // iOS shadow
        shadowColor: '#000',
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
        color: '#4F3130',
        textAlign: 'center'
    },
    suggestionIcon: {
        width: 55,
        height: 55,
        marginBottom: 15
    },
});

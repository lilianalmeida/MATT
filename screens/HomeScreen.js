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
    Linking
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements'

import MattLogo from '../assets/logo.png'


export default function HomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <LinearGradient
                    end={{ x: 1, y: 0 }}
                    start={{ x: 0, y: 1 }}
                    colors={['#71A0F9', '#D774F9']}
                    style={styles.linearGradient}
                >
                    <View style={styles.header}>
                        <Image style={styles.logoImage} source={MattLogo} />
                        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                            <Icon
                                name='cog-outline'
                                type='material-community'
                                color='#434343'
                                size={32}
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <View style={styles.mainSection}>
                            <Text style={styles.welcomeText}>Good Evening, Clara!</Text>
                            {[1, 2].map(x => (
                                <View key={x}>
                                    <TouchableOpacity style={styles.touchableSection} onPress={() => Linking.openURL('instagram://user?username=wearehutt')}>
                                        <View style={styles.contentSection}>
                                            <Text style={styles.contentText}>Not sure what to read? Here are some recommendations!</Text>
                                            <View
                                                style={{
                                                    borderBottomColor: 'white',
                                                    borderBottomWidth: 1,
                                                    paddingVertical: 7,
                                                }}
                                            />
                                            <Text style={styles.contentText2}>30 Books Everyone Should Read At Least Once In Their Lives</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={styles.contentRow}>
                                        <TouchableOpacity style={[styles.touchableSection, {marginRight: 10}]} onPress={() => Linking.openURL('youtube:')}>
                                            <View style={styles.contentSection}>
                                                <Text style={styles.contentText2}>Wind down with some meditation</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.touchableSection, {marginLeft: 10}]} onPress={() => Linking.openURL('fb:')}>

                                            <View style={styles.contentSection}>
                                                <Text style={styles.contentText2}>Did you drink enough water today?</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
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
    mainSection: {
        margin: 22,
    },
    welcomeText: {
        color: 'white',
        fontSize: 33,
        fontWeight: '600',
        alignSelf: 'center',
        paddingBottom: 20
    },
    touchableSection: {
        marginVertical: 10,
        flex:1
    },
    contentSection: {
        height: 149,
        padding: 20,
        borderRadius: 22,
        backgroundColor: 'rgba(64,51,81,0.8)',
    },
    contentText: {
        color: 'white',
    },
    contentText2: {
        color: 'white',
        fontWeight: '700',
        fontSize: 17,
        paddingVertical: 13,
    },
    contentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

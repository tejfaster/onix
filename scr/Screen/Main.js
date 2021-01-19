import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { DrawerActions } from '@react-navigation/native';

import SubMain from './SubMain'
export default function Main(props) {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('D:/project/9.1.2021/interApp/assets/image.jpg')} style={styles.image} >
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity  onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}>
                        <FontIcon
                            name='bars'
                            color='white'
                            size={25}
                            style={{ margin: 20 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginTop: 19, color: 'white',fontSize:18 }}>Profile</Text>
                </View>
                <Text style={{ marginLeft: 20, color: 'white', fontSize: 20, marginTop: 120 }}>Edwina</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name='location-sharp'
                        color='white'
                        size={30}
                        style={{ marginLeft: 20 }}
                    />
                    <Text style={{ marginTop: 8, color: 'white' }} >Bangalore, India</Text>
                </View>
            </ImageBackground>
            <SubMain />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8'
    },
    image: {
        width: '100%',
        height: 300
    },

})
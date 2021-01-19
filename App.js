import * as React from 'react';
import { Button, View, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  Divider,
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/Ionicons'
import Main from './scr/Screen/Main'


function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flexDirection: 'row' }}>
          <Avatar.Image size={80} source={require('D:/project/9.1.2021/interApp/assets/image.jpg')} style={styles.sideMenuProfileIcon} />
          <View style={{ flexDirection: 'column' }}>
            <Title style={{ marginTop: 30 }}>Edwina</Title>
            <View style={{ flexDirection: 'row' }}>
              <Icons
                name='location-sharp'
                color='black'
                size={15}
                style={{ marginTop: 6 }}
              />
              <Caption>Bangalore, India</Caption>
            </View>
          </View>
        </View>
        <Drawer.Section>
          <DrawerItem
          icon={()=>(
            <Icon
             name='user'
             size={30}
            />
          )}
          label='User'
          onPress={()=>{}}
          />
          <Divider/>
          <DrawerItem
          icon={()=>(
            <Icon
             name='setting'
             size={30}
            />
          )}
          label='Setting'
          onPress={()=>{}}
          />
        </Drawer.Section>
      </DrawerContentScrollView>

    </SafeAreaView>
  );
}

const Drawers = createDrawerNavigator();

export default function Drawerss() {
  return (
    <NavigationContainer>
      <Drawers.Navigator
        initialRouteName="Profile"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawers.Screen name="Profile" component={App} />
      </Drawers.Navigator>
    </NavigationContainer>
  )
}



const Tab = createBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size, color }) => {
        let iconName;

        if (route.name === 'Profile') {
          iconName = focused ? 'user' : 'user'
        } else if (route.name === 'Settings') {
          iconName = focused ? 'setting' : 'setting'
        }
        return <Icon name={iconName} size={size} color={color} />
      },
    })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey'
      }}
    >
      <Tab.Screen name="Profile" component={Main} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    // resizeMode: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginLeft: 20,
  },
})


//<Image source={require('D:/project/9.1.2021/interApp/assets/image.jpg')} style={styles.sideMenuProfileIcon} />


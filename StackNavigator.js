import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import BookingsScreen from './screens/BookingsScreen';
import SavedScreen from './screens/SavedScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './screens/SearchScreen';
import PlacesScreen from './screens/PlacesScreen';
import MapScreen from './screens/MapScreen';
import PropertyInfoScreen from './screens/PropertyInfoScreen';
import RoomsScreen from './screens/RoomsScreen';
import UserScreen from './screens/UserScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';

const StackNavigator = () => {

    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function BottomTabs() {

        return (
            <Tab.Navigator>
                
                <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel:"Home", tabBarActiveTintColor: "#4B6D4F", headerShown:false, 
                    tabBarIcon: ({focused}) => focused ? ( 
                        <Entypo name="home" size={24} color="#4B6D4F" />
                    ) : (
                        <AntDesign name="home" size={24} color="black" />
                    ) }} 
                />

                <Tab.Screen name="Saved" component={SavedScreen} options={{tabBarLabel:"Saved", tabBarActiveTintColor: "#4B6D4F", headerShown:false, 
                    tabBarIcon: ({focused}) => focused ? ( 
                        <AntDesign name="heart" size={24} color="#4B6D4F" />
                    ) : (
                        <AntDesign name="hearto" size={24} color="black" />
                    ) }} 
                />

                <Tab.Screen name="Bookings" component={BookingsScreen} options={{tabBarLabel:"Bookings", tabBarActiveTintColor: "#4B6D4F", headerShown:false, 
                    tabBarIcon: ({focused}) => focused ? ( 
                        <Ionicons name="notifications" size={24} color="#4B6D4F" />
                    ) : (
                        <Ionicons name="notifications-outline" size={24} color="black" />
                    ) }} 
                />

                <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarLabel:"Profile", tabBarActiveTintColor: "#4B6D4F", headerShown:false, 
                    tabBarIcon: ({focused}) => focused ? ( 
                        <Ionicons name="person" size={24} color="#4B6D4F" />
                    ) : (
                        <Ionicons name="person-outline" size={24} color="black" />
                    ) }} 
                />
                
            </Tab.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}}/>
                <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Places" component={PlacesScreen} />
                <Stack.Screen name="Map" component={MapScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Info" component={PropertyInfoScreen} />
                <Stack.Screen name="Rooms" component={RoomsScreen} />
                <Stack.Screen name="User" component={UserScreen} />
                <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;

const styles = StyleSheet.create({});
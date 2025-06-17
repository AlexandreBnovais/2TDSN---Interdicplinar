import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TimeScreen } from '../../screens/TimeLineScreen/timeScreen';
import { SearchScreen } from '../../screens/SearchScreen/searchScreen';
import { SettingScreen } from '../../screens/SettingScreen/settingScreen';

const Tab = createBottomTabNavigator();

export function Tabs () {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 20,
            backgroundColor: '#333',
            marginHorizontal: 20,
            borderRadius: 30,
            height: 60
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'TimeLine') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'menu' : 'menu';
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#B8B8B8',
        }
      }}
      initialRouteName='TimeLine' 
    >
        <Tab.Screen 
          name='TimeLine' 
          component={TimeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold'},
          }} 
        />

        <Tab.Screen 
          name='Search' 
          component={SearchScreen}
          options={{
            tabBarLabel: 'Seach',
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold'},
          }} 
        />

        <Tab.Screen 
          name='Settings' 
          component={SettingScreen}
          options={{
            tabBarLabel: 'menu',
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold'},
          }} 
        />
    </Tab.Navigator>
    
  )
}

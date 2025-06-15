import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../screens/HomeScreen/homeScreen';
import { LoginScreen } from '../../screens/LoginScreen/loginScreen';
import { SingUpScreen } from '../../screens/SingUpScreen/singUpScreen';
import { Tabs } from '../TabLayout/tabs';

// import WorkScreens 
import { WorkDesc1 } from '../../screens/WorkDescScreen/workDesc1';
import { WorkDesc2 } from '../../screens/WorkDescScreen/workDesc2';
import { WorkDesc3 } from '../../screens/WorkDescScreen/workDesc3';
import { WorkDesc4 } from '../../screens/WorkDescScreen/workDesc4';
import { WorkDesc5 } from '../../screens/WorkDescScreen/workDesc5';
import { WorkDesc6 } from '../../screens/WorkDescScreen/workDesc6'

const Stack = createNativeStackNavigator();

export const Layout = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='singUp' component={SingUpScreen} />
            <Stack.Screen name='Tab' component={Tabs}/>
            <Stack.Screen name='WorkDesc1' component={WorkDesc1} />
            <Stack.Screen name='WorkDesc2' component={WorkDesc2} />
            <Stack.Screen name='WorkDesc3' component={WorkDesc3} />
            <Stack.Screen name='WorkDesc4' component={WorkDesc4} />
            <Stack.Screen name='WorkDesc5' component={WorkDesc5} />
            <Stack.Screen name='WorkDesc6' component={WorkDesc6} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

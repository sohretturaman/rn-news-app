// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detail, Home } from '../screens';
import BottomTabs from './BottomTab';
import { RouterNames } from '../config';


const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (

      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name={RouterNames.BOTTOM_HOME} component={BottomTabs} />
        <Stack.Screen  name={RouterNames.DETAIL} component={Detail} />
      </Stack.Navigator>
   
  );
}

export default MainNavigator;
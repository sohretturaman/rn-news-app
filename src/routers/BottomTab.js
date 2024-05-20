import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Detail, Home, News, Profile, Save, Search} from '../screens';
import {RouterNames} from '../config';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name={RouterNames.HOME}
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home" size={30} color={'#333333'} />
          ),
        }}
      />
      <Tab.Screen
        name={RouterNames.NEWS}
        component={News}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="fire" size={30} color={'#333333'} />
          ),
        }}
      />

      <Tab.Screen
        name={RouterNames.SEARCH}
        component={Search}
        options={{
          tabBarIcon: () => (
            <Ionicons name="search" size={30} color={'#333333'} />
          ),
        }}
      />
      <Tab.Screen
        name={RouterNames.SAVE}
        component={Save}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="content-save"
              size={30}
              color={'#333333'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouterNames.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account"
              size={30}
              color={'#333333'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;

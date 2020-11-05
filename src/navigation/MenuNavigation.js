import React from 'react';
import {Dimensions} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Recommended from '../components/menu/Recommended';
import Best from '../components/menu/Best';
import New from '../components/menu/New';

const Tab = createMaterialTopTabNavigator();

export default function MenuNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 15},
        style: {backgroundColor: '#303857', marginBottom: 10},
        activeTintColor: 'white',
        pressOpacity: 0.5,
        indicatorStyle: {backgroundColor: '#ffe200'},
      }}
      tabBarPosition="top"
      swipeVelocityImpact={0.4}
      initialLayout={{width: Dimensions.get('window').width}}>
      <Tab.Screen name="최신" component={New} />
      <Tab.Screen name="베스트" component={Best} />
      <Tab.Screen name="추천" component={Recommended} />
    </Tab.Navigator>
  );
}

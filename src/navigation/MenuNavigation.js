import React from 'react';
import {Dimensions} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import All from '../components/menu/All';
import Best from '../components/menu/Best';
import New from '../components/menu/New';

const Tab = createMaterialTopTabNavigator();

export default function MenuNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 15},
        style: {backgroundColor: '#303857'},
        activeTintColor: 'white',
        pressOpacity: 0.5,
        indicatorStyle: {backgroundColor: '#ffe200'},
      }}
      // style={{backgroundColor: '#303857'}}
      tabBarPosition="top"
      swipeVelocityImpact={0.4}
      initialLayout={{width: Dimensions.get('window').width}}>
      <Tab.Screen name="전체" component={All} />
      <Tab.Screen name="베스트" component={Best} />
      <Tab.Screen name="최신" component={New} />
    </Tab.Navigator>
  );
}

import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import All from '../components/menu/All';
import Best from '../components/menu/Best';
import New from '../components/menu/New';

const Tab = createMaterialTopTabNavigator();

export default function MenuNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All" component={All} />
      <Tab.Screen name="Best" component={Best} />
      <Tab.Screen name="New" component={New} />
    </Tab.Navigator>
  );
}

import React from 'react';
import {View, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import styles from '../constants/styles';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  PRIMARY_TEXT_COLOR,
  TERTIARY_COLOR,
} from '../constants/colors';
import Recommended from '../components/menu/Recommended';
import Best from '../components/menu/Best';
import Recent from '../components/menu/Recent';

const Tab = createMaterialTopTabNavigator();

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {fontSize: 15},
          style: {backgroundColor: PRIMARY_COLOR, marginBottom: 10},
          activeTintColor: 'black',
          pressOpacity: 0.5,
          indicatorStyle: {backgroundColor: TERTIARY_COLOR, height: 3},
        }}
        tabBarPosition="top"
        swipeVelocityImpact={0.4}
        initialLayout={{width: Dimensions.get('window').width}}>
        <Tab.Screen name="최신" component={Recent} />
        <Tab.Screen name="베스트" component={Best} />
        <Tab.Screen name="추천" component={Recommended} />
      </Tab.Navigator>
    </View>
  );
}

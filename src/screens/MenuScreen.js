import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {quizData} from '../constants/data';
import MenuNavigation from '../navigation/MenuNavigation';
import styles from '../constants/styles';

export const MenuContext = React.createContext();

export default function MenuScreen({navigation}) {
  const select = () => {
    console.log('selected');
  };

  return (
    <MenuContext.Provider value={{quizData}}>
      <View style={styles.container}>
        <MenuNavigation />
      </View>
    </MenuContext.Provider>
  );
}

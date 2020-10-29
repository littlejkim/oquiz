import React, {useEffect} from 'react';
import {View, RefreshControl} from 'react-native';
import MenuNavigation from '../navigation/MenuNavigation';
import styles from '../constants/styles';

export const MenuContext = React.createContext();

export default function MenuScreen({route, navigation}) {
  const {quizData} = route.params;

  const pick = (evt) => {
    console.log('Selected: ' + JSON.stringify(evt));
  };

  return (
    <MenuContext.Provider value={{quizData, pick}}>
      <View style={styles.container}>
        <MenuNavigation />
      </View>
    </MenuContext.Provider>
  );
}

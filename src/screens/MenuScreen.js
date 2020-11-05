import React, {useContext} from 'react';
import {View, RefreshControl} from 'react-native';
import MenuNavigation from '../navigation/MenuNavigation';
import styles from '../constants/styles';

import {StoreContext} from '../context/QuizContext';

export const MenuContext = React.createContext();

export default function MenuScreen({route, navigation}) {
  const state = useContext(StoreContext);
  // console.log(state.test);
  const {quizData} = route.params;
  console.log('Menu Screen entered');
  return (
    <MenuContext.Provider value={{quizData}}>
      <View style={styles.container}>
        <MenuNavigation />
      </View>
    </MenuContext.Provider>
  );
}

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';
import CreateScreen from './src/screens/CreateScreen';
import InitialScreen from './src/screens/quiz/InitialScreen';
import PickerScreen from './src/screens/quiz/PickerScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#303857', shadowColor: 'transparent'},
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈'}}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{title: '메뉴'}}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{title: '퀴즈 만들기'}}
        />
        <Stack.Screen
          name="Initial"
          component={InitialScreen}
          options={{title: '입장'}}
        />
        <Stack.Screen
          name="Picker"
          component={PickerScreen}
          options={{title: '선택'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

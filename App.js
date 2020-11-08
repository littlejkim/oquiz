import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';
import CreateScreen from './src/screens/CreateScreen';
import InitialScreen from './src/screens/quiz/InitialScreen';
import PickerScreen from './src/screens/quiz/PickerScreen';

import {QuizProvider} from './src/context/QuizContext';

import {PRIMARY_COLOR, PRIMARY_TEXT_COLOR} from './src/constants/colors';

const Stack = createStackNavigator();

export default function App() {
  return (
    <QuizProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTintColor: PRIMARY_TEXT_COLOR,
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
              shadowColor: 'transparent',
            },
            headerBackTitleVisible: false,
            headerLeftContainerStyle: {padding: 10},
            cardShadowEnabled: false,
            cardOverlayEnabled: false,
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
    </QuizProvider>
  );
}

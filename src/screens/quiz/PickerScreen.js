import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {HeaderBackButton} from '@react-navigation/stack';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import styles from '../../constants/styles';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../../constants/colors';
import Picker from '../../components/picker/Picker';
import {rangeChoices} from '../../constants/choices';

export default function PickerScreen({route, navigation}) {
  const exitAlert = () => {
    ReactNativeHapticFeedback.trigger('impactLight', hapticFeedbackOptions);
    Alert.alert(
      '경고',
      '나가시겠습니까?',
      [
        {
          text: '취소',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: '예', onPress: () => navigation.pop(2)},
      ],
      {cancelable: false},
    );
  };

  // exit button
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{marginRight: 20}} onPress={exitAlert}>
          <Text style={{color: 'white', fontSize: 16}}>나가기</Text>
        </TouchableOpacity>
      ),
      headerLeft: (props) => (
        <HeaderBackButton
          {...props}
          onPress={() => {
            if (questionIndex > 0) {
              ReactNativeHapticFeedback.trigger(
                'impactLight',
                hapticFeedbackOptions,
              );
              setQuestionIndex(questionIndex - 1);
            } else {
              ReactNativeHapticFeedback.trigger(
                'impactLight',
                hapticFeedbackOptions,
              );
              exitAlert();
            }
          }}
        />
      ),
    });
  });
  useEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, []);

  const questions = [
    {value: 0, question: '1. 가장 좋아하는 음식이 어떻게 되세요?'},
    {value: 1, question: '2. 가장 좋아하는 동물이 어떻게 되세요?'},
    {value: 2, question: '3. 뭐하고 계세요?'},
    {value: 3, question: '4. 뭐하고 계세요?'},
    {value: 4, question: '5. 뭐하고 계세요?'},
    {value: 5, question: '6. 뭐하고 계세요?'},
    {value: 6, question: '7. 뭐하고 계세요?'},
    {value: 7, question: '8. 뭐하고 계세요?'},
    {value: 8, question: '9. 뭐하고 계세요?'},
    {
      value: 9,
      question: '10. 뭐하고 계세요?',
    },
  ];

  const [questionIndex, setQuestionIndex] = useState(0);

  // haptic feedback options
  const hapticFeedbackOptions = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const defaultValue = 0;
  const extractFromPicker = (evt) => {
    console.log('event: ' + evt);
    ReactNativeHapticFeedback.trigger('impactLight', hapticFeedbackOptions);
  };

  const nextSelected = () => {
    ReactNativeHapticFeedback.trigger('impactLight', hapticFeedbackOptions);
    if (questionIndex < 9) {
      console.log('다음');
      setQuestionIndex(questionIndex + 1);
    } else {
      alert('finished');
      console.log('done');
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: questionIndex,
            backgroundColor: SECONDARY_COLOR,
          }}></View>
        <View
          style={{
            flex: 9 - questionIndex,
            backgroundColor: PRIMARY_COLOR,
          }}></View>
      </View>
      <View style={[styles.mainContent, {flex: 10}]}>
        <View
          style={{
            flex: 1.5,
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              margin: 30,
              color: 'white',
              fontSize: 30,
              textAlign: 'left',
            }}>
            {questions[questionIndex].question}
          </Text>
        </View>
        <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
          <Picker {...{rangeChoices, defaultValue, extractFromPicker}} />
        </View>
      </View>
      <View style={[styles.footer, {marginBottom: 40}]}>
        <TouchableOpacity
          style={styles.footerMainButton}
          activeOpacity={0.7}
          onPress={() => nextSelected()}>
          <Text style={styles.footerMainText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

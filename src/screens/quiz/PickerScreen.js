import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from '../../constants/styles';
import Picker from '../../components/picker/Picker';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {rangeChoices} from '../../constants/choices';

export default function PickerScreen({route, navigation}) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, []);

  const questions = [
    {value: 0, question: '1. 뭐하고 계세요?'},
    {value: 1, question: '2. 뭐하고 계세요?'},
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

  const defaultValue = 2;
  const extractFromPicker = (evt) => {
    console.log('event: ' + evt);
    ReactNativeHapticFeedback.trigger('impactLight', hapticFeedbackOptions);
  };

  const nextSelected = () => {
    if (questionIndex < 9) {
      console.log('다음');
      setQuestionIndex(questionIndex + 1);
    } else {
      console.log('done');
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.mainContent, {flex: 10, justifyContent: 'center'}]}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
            {questions[questionIndex].question}
          </Text>
        </View>
        <View style={{flex: 5, justifyContent: 'center'}}>
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

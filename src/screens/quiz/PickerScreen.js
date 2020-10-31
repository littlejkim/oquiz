import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from '../../constants/styles';
import Picker from '../../components/picker/Picker';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

export default function PickerScreen({route, navigation}) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, []);
  // haptic feedback options
  const hapticFeedbackOptions = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const values = [
    {label: '5000원 이하', value: 0},
    {label: '5000원 ~ 1만원', value: 1},
    {label: '1만원 ~ 2만원', value: 2},
    {label: '2만원 ~ 3만원', value: 3},
    {label: '3만원 ~ 4만원', value: 4},
    {label: '4만원 ~ 5만원', value: 5},
    {label: '5만원 이상', value: 6},
  ];
  const defaultValue = 2;
  const extractFromPicker = (evt) => {
    console.log('event: ' + evt);
    ReactNativeHapticFeedback.trigger('impactLight', hapticFeedbackOptions);
  };
  return (
    <View style={styles.container}>
      <View style={[styles.mainContent, {flex: 10, justifyContent: 'center'}]}>
        <Picker {...{values, defaultValue, extractFromPicker}} />
      </View>
      <View style={[styles.footer, {marginBottom: 40}]}>
        <TouchableOpacity
          style={styles.footerMainButton}
          activeOpacity={0.7}
          onPress={() => console.log('다음')}>
          <Text style={styles.footerMainText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

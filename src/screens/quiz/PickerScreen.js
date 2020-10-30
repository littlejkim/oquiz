import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from '../../constants/styles';
import Picker from '../../components/picker/Picker';

export default function PickerScreen({route, navigation}) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, []);

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
  };
  return (
    <View style={styles.container}>
      <View style={[styles.mainContent, {flex: 10, justifyContent: 'center'}]}>
        <Picker {...{values, defaultValue, extractFromPicker}} />
      </View>
      <View style={styles.footer}>
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

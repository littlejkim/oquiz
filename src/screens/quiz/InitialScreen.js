import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from '../../constants/styles';

export default function InitialScreen({route, navigation}) {
  const {item} = route.params;
  useEffect(() => {
    navigation.setOptions({
      headerTitle: item.title,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.mainContent, {justifyContent: 'center'}]}>
        <Text
          style={{
            textAlign: 'left',
            color: 'white',
            fontSize: 40,
            margin: 30,
          }}>
          {item.description}
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerMainButton}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Picker', {title: item.title})}>
          <Text style={styles.footerMainText}>입장하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerSubButton}
          activeOpacity={0.7}
          onPress={() => console.log('신고하기')}>
          <Text style={styles.footerSubtext}>신고하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

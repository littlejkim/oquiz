import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from '../constants/styles';
import {PRIMARY_TEXT_COLOR} from '../constants/colors';
import {setDummy} from '../utils/GetQuizzes';
import {QuizContext} from '../context/QuizContext';

export default function HomeScreen({navigation}) {
  return (
    <QuizContext.Provider>
      <View style={styles.container}>
        <View style={[styles.mainContent, {justifyContent: 'center'}]}>
          <Text
            style={{
              textAlign: 'left',
              color: PRIMARY_TEXT_COLOR,
              fontSize: 40,
              margin: 30,
            }}>
            안녕하십니까, {'\n'}카카오증권입니다. {'\n'}오늘도 좋은 하루되세요!
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerMainButton}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Menu')}>
            <Text style={styles.footerMainText}>퀴즈 구경하기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerSubButton}
            activeOpacity={0.7}
            onPress={() => setDummy()}>
            <Text style={styles.footerSubtext}>퀴즈 만들기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </QuizContext.Provider>
  );
}

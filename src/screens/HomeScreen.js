import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import styles from '../constants/styles';
import {
  getQuizzes,
  setDummy,
  getBestQuizzes,
  getRecentQuizzes,
  getRecommendedQuizzes,
  getInitialQuizzes,
} from '../utils/GetQuizzes';
export default function HomeScreen({route, navigation}) {
  //get all quizzes
  let quizData = {};
  useEffect(() => {
    getInitialQuizzes(5)
      .then((quiz) => {
        quizData = quiz;
        console.log('Initial quiz list loaded');
      })
      .then(() => SplashScreen.hide());
  });

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
          안녕하십니까, {'\n'}카카오증권입니다. {'\n'}오늘도 좋은 하루되세요!
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerMainButton}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Menu', {quizData: quizData})}>
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
  );
}

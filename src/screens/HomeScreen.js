import React,{useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import styles from '../constants/styles';
import {getQuizzes} from '../utils/Db';
export default function HomeScreen({route,navigation}) {
  //get all quizzes
  let quizzes = []
  useEffect(() => {
    getQuizzes().then((quiz)=>{
      quizzes = quiz
    }); 
  });

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Text>Hi</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerMainButton}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Menu',{quizData:quizzes})}>
          <Text style={styles.footerMainText}>퀴즈 구경하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerSubButton}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Create')}>
          <Text style={styles.footerSubtext}>퀴즈 만들기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

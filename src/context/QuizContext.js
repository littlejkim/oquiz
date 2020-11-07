import React, {useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {getInitialQuizzes} from '../utils/GetQuizzes';

const QuizContext = React.createContext(null);

const QuizProvider = ({children}) => {
  const [best, setBest] = useState();
  const [recent, setRecent] = useState();
  const [recommended, setRecommended] = useState();
  const [firstDoc, setFirstDoc] = useState();
  const [lastDoc, setLastDoc] = useState();

  useEffect(() => {
    getInitialQuizzes(10)
      .then((quiz) => {
        if (quiz) {
          setBest(quiz.best);
          setRecent(quiz.recent);
          setRecommended(quiz.recommended);
          setFirstDoc(quiz.firstDoc);
          setLastDoc(quiz.lastDoc);
          console.log('initial data loaded');
        } else {
          console.log('error loading data');
        }
      })
      .then(() => SplashScreen.hide());
  }, []);

  const store = {
    best,
    setBest,
    recent,
    setRecent,
    recommended,
    setRecommended,
    firstDoc,
    setFirstDoc,
    lastDoc,
    setLastDoc,
  };

  return <QuizContext.Provider value={store}>{children}</QuizContext.Provider>;
};

export {QuizProvider, QuizContext};

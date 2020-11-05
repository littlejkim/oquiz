import React, {useState} from 'react';
import {
  getQuizzes,
  setDummy,
  getBestQuizzes,
  getRecentQuizzes,
  getRecommendedQuizzes,
  getInitialQuizzes,
} from '../utils/GetQuizzes';
import SplashScreen from 'react-native-splash-screen';

const StoreContext = React.createContext();

const StoreProvider = ({children}) => {
  const [test, setTest] = useState('hi');

  const store = {
    test,
    setTest,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export {StoreProvider, StoreContext};

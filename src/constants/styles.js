import {StyleSheet} from 'react-native';
import {
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_COLOR,
  SECONDARY_TEXT_COLOR,
} from './colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  mainContent: {
    flex: 5,
    backgroundColor: PRIMARY_COLOR,
  },
  footer: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    marginBottom: 20,
    marginStart: 20,
    marginEnd: 20,
  },
  footerMainButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 50,
  },
  footerSubButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  footerMainText: {
    fontSize: 18,
    color: SECONDARY_TEXT_COLOR,
  },
  footerSubtext: {
    fontSize: 17,
    textDecorationLine: 'underline',
    color: PRIMARY_TEXT_COLOR,
  },
});

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303857',
  },
  mainContent: {
    flex: 5,
    backgroundColor: '#303857',
    // alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#303857',
    marginBottom: 20,
    marginStart: 20,
    marginEnd: 20,
  },
  footerMainButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffe200',
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
    color: 'black',
  },
  footerSubtext: {
    fontSize: 17,
    textDecorationLine: 'underline',
    color: 'white',
  },
});

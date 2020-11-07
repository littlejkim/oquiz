import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303857',
    // marginVertical: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  item: {
    backgroundColor: '#ffe200',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 15,
    flex: 1,
    margin: 4,
    height: Dimensions.get('window').width / 2 - 50,
  },

  itemTitleText: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: Dimensions.get('window').width / 20,
    marginLeft: Dimensions.get('window').width / 20,
    marginRight: Dimensions.get('window').width / 20,
    marginBottom: 8,
  },
  itemDescriptionText: {
    color: 'black',
    fontSize: 15,
    marginLeft: Dimensions.get('window').width / 20,
    marginRight: Dimensions.get('window').width / 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingLeft: 20,
  },
  tabContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingLeft: 20,
    height: 30,
    alignItems: 'center',
    marginTop: 10,
  },
});

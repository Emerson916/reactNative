import {StyleSheet} from 'react-native';

const stylesHeader = StyleSheet.create({
  header: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#c2c2c2',
  },

  icons: {
    height: 25,
    width: 25,
  },

  name: {
    fontSize: 30,
    color: '#262626',
    fontWeight: 'bold',
    fontFamily: 'cursive',
  },
});

export default stylesHeader;

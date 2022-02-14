import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  ContainerStories: {
    height: 110,
  },

  SubContainerStories: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Stories: {
    width: 55,
    height: 55,
    borderRadius: 90,
    borderBottomWidth: 1,
    borderColor: '#20232a',
  },

  Image: {
    width: 55,
    height: 55,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: '#ff7a8e',
  },

  Name: {
    borderBottomWidth: 2,
    borderColor: '#292929',
  },
});

export default styles;

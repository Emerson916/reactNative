import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  post: {
    height: 550,
    borderBottomWidth: 1,
    borderColor: '#20232a',
    marginBottom: 20,
  },

  container_texts: {
    height: 80,
    padding: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#292929',
  },

  description: {
    fontSize: 18,
    color: '#292929',
  },

  image: {
    height: 300,
  },

  iconsFeedback: {
    height: 40,
    width: 40,
    margin: 5,
  },

  containerIcons: {
    flexDirection: 'row',
  },

  comments: {
    fontSize: 16,
    padding: 20,
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  post: {
    height: 800,
    borderBottomWidth: 1,
    borderColor: '#20232a',
    marginBottom: 20,
  },

  containerPerfil: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  imagePerfil: {
    height: 50,
    width: 50,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: '#ff7a8e',
  },

  name: {
    fontWeight: 'bold',
    color: '#000',
    paddingStart: 10,
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
    height: 400,
  },

  iconsFeedback: {
    height: 40,
    width: 40,
    margin: 10,
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

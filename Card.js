import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const Card = ({title, location, imgURI, comments}) => (
  <View style={styles.post}>
    <View style={styles.container_texts}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.location}>{location}</Text>
    </View>

    <Image style={styles.image} source={{uri: imgURI}} />
    <LottieView
      style={styles.likeHeart}
      source={require('./heart.json')}
      autoPLay
      loop
    />
    <Text style={styles.comments}>{comments}</Text>
  </View>
);

export default Card;

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

  likeHeart: {
    height: 50,
    width: 100,
    backgroundColor: 'red',
  },

  comments: {
    fontSize: 16,
    padding: 20,
  },
});
// docs que pode ajudar na hora de fazer o like
// https://reactnative.dev/docs/flatlist

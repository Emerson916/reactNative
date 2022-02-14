import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import Card from './components/Card/Card';
import Stories from './components/Storie/Storie';

// const LISTA = [...Array(10).keys()].map(e => 'Titulo ' + e);

const LIST = [
  {
    id: '1',
    title: 'Cade o filme do Miles ?',
    location: 'Nova foto de perfil',
    imgURI:
      'https://361605-1208129-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/11/capa-miles-morales.jpg',
    comments: 'Cade o filme do miles marvel ?',
  },

  {
    id: '2',
    title: 'O melhor anime',
    location: 'Nova foto de perfil',
    imgURI: 'https://pbs.twimg.com/media/E4vaWoDWUAYo34I.jpg',
    comments: 'O melhor anime de todos os tempos',
  },

  {
    id: '3',
    title: 'Spider-Man',
    location: 'Nova foto de perfil',
    imgURI: 'https://i.redd.it/spolpm8eofd61.jpg',
    comments: 'Show de bola!',
  },

  {
    id: '4',
    title: 'Spider-Man',
    location: 'Nova foto de perfil',
    imgURI: 'https://images8.alphacoders.com/964/964785.png',
    comments: 'Show de bola!',
  },
];

const STORIES = [
  {
    id: '1',
    name: 'Anderson Alcantra',
    imgURI:
      'https://361605-1208129-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/11/capa-miles-morales.jpg',
  },

  {
    id: '2',
    name: 'José Marquinhos',
    imgURI:
      'https://361605-1208129-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/11/capa-miles-morales.jpg',
  },

  {
    id: '3',
    name: 'Beatriz Ferreira',
    imgURI:
      'https://361605-1208129-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/11/capa-miles-morales.jpg',
  },

  {
    id: '4',
    name: 'Beatriz Ferreira',
    imgURI:
      'https://361605-1208129-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/11/capa-miles-morales.jpg',
  },

  {
    id: '5',
    name: 'Beatriz Ferreira',
    imgURI:
      'https://361605-1208129-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/11/capa-miles-morales.jpg',
  },

  {
    id: '6',
    name: 'Beatriz Ferreira',
    imgURI:
      'https://361605-1208129-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/11/capa-miles-morales.jpg',
  },
];

const App = () => {
  return (
    <SafeAreaView>
      <View style={stylesHeader.header}>
        <Image
          style={stylesHeader.perfil}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/77053593?v=4',
          }}
        />
        <Text style={stylesHeader.name}>Emerson Silva</Text>
      </View>

      <FlatList
        horizontal
        data={STORIES}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Stories {...item} />}
      />

      <FlatList
        data={LIST}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Card {...item} />}
      />
    </SafeAreaView>
  );
};

export default App;

const stylesHeader = StyleSheet.create({
  header: {
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#262626',
    alignItems: 'center',
  },

  perfil: {
    height: 50,
    width: 50,
    margin: 10,
    borderRadius: 40,
  },

  name: {
    fontSize: 18,
    color: '#FFF',
  },
});

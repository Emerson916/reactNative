import React from 'react';

import {Text, View, FlatList, Image, StyleSheet} from 'react-native';

const LISTA = [...Array(3).keys()].map(e => 'Titulo ' + e);

const App = () => {
  return (
    <View>
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
        data={LISTA}
        renderItem={({item}) => (
          <View style={styles.post}>
            <View style={styles.container_texts}>
              <Text style={styles.title}>{item}</Text>
              <Text style={styles.description}>
                Descrição de uma linha inteira
              </Text>
            </View>
            <Image
              style={styles.image}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQga-UeYXzj-_9fGD4sRupK-7IrGjbx_X6w&usqp=CAU',
              }}
            />
            <Text style={styles.comments_multLines}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

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

  comments_multLines: {
    fontSize: 20,
    padding: 20,
  },
});
export default App;

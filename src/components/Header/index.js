import {View, Text, Image} from 'react-native';
import React from 'react';
import stylesHeader from './style';

const Header = () => {
  return (
    <View style={stylesHeader.header}>
      <Image
        style={stylesHeader.icons}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/128/45/45010.png',
        }}
      />

      <Text style={stylesHeader.name}>Emerson Silva</Text>

      <Image
        style={stylesHeader.icons}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/128/54/54641.png',
        }}
      />
    </View>
  );
};

export default Header;

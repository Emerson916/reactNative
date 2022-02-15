import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import stylesHeader from './style';

const Header = () => {
  return (
    <View style={stylesHeader.header}>
      <TouchableOpacity>
        <Image
          style={stylesHeader.icons}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/45/45010.png',
          }}
        />
      </TouchableOpacity>

      <Text style={stylesHeader.name}>Emerson Silva</Text>

      <TouchableOpacity>
        <Image
          style={stylesHeader.icons}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/54/54641.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

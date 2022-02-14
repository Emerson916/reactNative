import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const Story = ({name, imgURI}) => {
  return (
    <View style={styles.ContainerStories}>
      <View style={styles.SubContainerStories}>
        <View style={styles.Stories}>
          <TouchableOpacity>
            <Image style={styles.Image} source={{uri: imgURI}} />
          </TouchableOpacity>
        </View>
        <Text style={styles.Name}>{name}</Text>
      </View>
    </View>
  );
};

export default Story;

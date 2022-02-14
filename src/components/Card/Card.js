import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import heartSolid from '../../assets/card/heart.png';
import heartOutline from '../../assets/card/heartOutline.png';
import bookmarkSolid from '../../assets/card/bookmark.png';
import bookmarkOutline from '../../assets/card/bookmarkOutline.png';
import IconButtonComp from '../IconButton/IconButton';
// import LottieView from 'lottie-react-native';

const Card = ({imgPerfilURI, name, title, location, imgURI, comments}) => {
  const handleImageTouch = cardTitle => {
    console.log('clicando  com o dedo na imagem: ', cardTitle);
  };

  return (
    <View style={styles.post}>
      <View style={styles.containerPerfil}>
        <TouchableOpacity>
          <Image style={styles.imagePerfil} source={{uri: imgPerfilURI}} />
        </TouchableOpacity>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.container_texts}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>

      <TouchableOpacity onPress={() => handleImageTouch(title)}>
        <Image style={styles.image} source={{uri: imgURI}} />
      </TouchableOpacity>

      <View style={styles.containerIcons}>
        <IconButtonComp
          iconSolid={<Image style={styles.iconsFeedback} source={heartSolid} />}
          iconOutline={
            <Image style={styles.iconsFeedback} source={heartOutline} />
          }
        />
        <IconButtonComp
          iconSolid={
            <Image style={styles.iconsFeedback} source={bookmarkOutline} />
          }
          iconOutline={
            <Image style={styles.iconsFeedback} source={bookmarkSolid} />
          }
        />
      </View>
      <Text style={styles.comments}>{comments}</Text>
    </View>
  );
};

export default Card;

import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
// import IconButton from '../iconButton/iconButton';
import styles from './styles';
import heart from '../../assets/card/heart.png';
import heartOutline from '../../assets/card/heartOutline.png';
import bookmark from '../../assets/card/bookmark.png';
import bookmarkOutline from '../../assets/card/bookmarkOutline.png';
// import LottieView from 'lottie-react-native';

const Card = ({title, location, imgURI, comments}) => {
  const handleImageTouch = cardTitle => {
    console.log('clicando  com o dedo na imagem: ', cardTitle);
  };

  const [check, setCheck] = useState(false);

  const handleChecked = () => {
    setCheck(!check);
  };

  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.post}>
      <View style={styles.container_texts}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>

      <TouchableOpacity onPress={() => handleImageTouch(title)}>
        <Image style={styles.image} source={{uri: imgURI}} />
      </TouchableOpacity>
      <View style={styles.containerIcons}>
        <TouchableOpacity onPress={() => handleChecked()}>
          <Image
            style={styles.iconsFeedback}
            source={!check ? heartOutline : heart}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCheck()}>
          <Image
            style={styles.iconsFeedback}
            source={!checked ? bookmarkOutline : bookmark}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.comments}>{comments}</Text>
    </View>
  );
};

export default Card;

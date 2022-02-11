import {View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from '../Card/styles';
// import heart from '../../assets/card/heart.png';
// import heartOutline from '../../assets/card/heartOutline.png';
// import bookmark from '../../assets/card/bookmark.png';
// import bookmarkOutline from '../../assets/card/bookmarkOutline.png';

const IconButton = ({imagemOutline, imagem}) => {
  const [check, setCheck] = useState(false);

  const handleChecked = () => {
    setCheck(!check);
  };
  return (
    <View style={styles.containerIcons}>
      <TouchableOpacity onPress={() => handleChecked()}>
        <Image
          style={styles.iconsFeedback}
          source={!check ? imagemOutline : imagem}
        />
        {/* <Image
          style={styles.iconsFeedback}
          source={!check ? {bookmark} : {bookmarkOutline}}
        /> */}
      </TouchableOpacity>
    </View>
  );
};

export default IconButton;

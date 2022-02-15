import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../IconButton/styles';

const IconButtonComp = ({iconSolid, iconOutline, onChange, onLiked}) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
    if (!checked) {
      onChange(true);
    } else {
      onChange(false);
    }
  };

  return (
    <View style={styles.containerIcons}>
      <TouchableOpacity onPress={handleChecked}>
        {!checked ? iconOutline : iconSolid}
      </TouchableOpacity>
    </View>
  );
};

export default IconButtonComp;

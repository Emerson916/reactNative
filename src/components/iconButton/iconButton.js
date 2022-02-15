import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../IconButton/styles';

const IconButtonComp = ({iconSolid, iconOutline, onChange, onLiked}) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
    // onLiked(checked);
    if (!checked) {
      onChange(!checked);
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

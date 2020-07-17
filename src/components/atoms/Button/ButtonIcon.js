import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconBack} from '../../../assets';

const ButtonIcon = ({...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      {rest.name === 'back' && (
        <Image source={IconBack} style={styles.iconBack} />
      )}
    </TouchableOpacity>
  );
};

const styles = {
  iconBack: {
    width: 25,
    height: 25,
  },
};

export default ButtonIcon;

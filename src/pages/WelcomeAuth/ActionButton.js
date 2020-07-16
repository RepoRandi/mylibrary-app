import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../../utils';
import {Button} from '../../components';

const ActionButton = ({desc, title}) => {
  return (
    <View style={styles.wrapper.component}>
      <Text style={styles.text.desc}>{desc}</Text>
      <Button title={title} />
    </View>
  );
};

const styles = {
  wrapper: {
    component: {marginBottom: 43, maxWidth: 225},
  },
  text: {
    desc: {
      fontSize: 10,
      color: colors.text.default,
      textAlign: 'center',
      paddingHorizontal: '15%',
      marginBottom: 6,
    },
  },
};

export default ActionButton;

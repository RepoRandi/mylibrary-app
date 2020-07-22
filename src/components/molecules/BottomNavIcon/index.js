import React from 'react';
import {Image, Text, View} from 'react-native';

const BottomNavIcon = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image style={{width: 26, height: 26}} source={props.img} />
      <Text
        style={{
          fontSize: 10,
          color: '#545454',
          marginTop: 4,
          color: props.active ? '#43AB4A' : '#545454',
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default BottomNavIcon;

import React from 'react';
import {Image, Text, View} from 'react-native';

const ScrollableItem = (props) => {
  return (
    <View style={{marginRight: 16}}>
      <View
        style={{
          width: 150,
          height: 200,
          borderRadius: 10,
          backgroundColor: 'pink',
        }}>
        <Image
          style={{
            width: undefined,
            height: undefined,
            resizeMode: 'cover',
            borderRadius: 10,
            flex: 1,
          }}
          source={props.img}
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#1C1C1C',
          marginTop: 6,
          textAlign: 'center',
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default ScrollableItem;

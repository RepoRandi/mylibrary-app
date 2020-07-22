import React from 'react';
import {Text, View, Image} from 'react-native';

const BookFeature = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image style={{width: 58, height: 58}} source={props.img} />
      <Text
        style={{
          fontSize: 12,
          fontWeight: 'bold',
          color: '#1C1C1C',
          marginTop: 15,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default BookFeature;

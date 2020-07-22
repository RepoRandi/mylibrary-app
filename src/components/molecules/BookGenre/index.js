import React from 'react';
import {Text, View, Image} from 'react-native';

const BookGenre = (props) => {
  return (
    <View
      style={{width: `${100 / 4}%`, alignItems: 'center', marginBottom: 18}}>
      <View
        style={{
          width: 60,
          height: 60,
          borderWidth: 1,
          borderColor: '#EFEFEF',
          borderRadius: 18,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={{width: 50, height: 50}} source={props.img} />
      </View>
      <Text
        style={{
          fontSize: 11,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 6,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default BookGenre;

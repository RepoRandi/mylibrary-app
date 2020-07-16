import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 2000);
  });

  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;

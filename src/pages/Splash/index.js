import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {colors} from '../../utils';
import {IllustrationSplash} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 2000);
  });

  return (
    <View style={styles.wrapper.page}>
      <View />
      <IllustrationSplash width={250} height={200} />
      <Text style={styles.text.welcome}>MyLibrary</Text>
      <Image
        source={require('../../assets/loading/loading.gif')}
        style={styles.wrapper.illustration}
      />
    </View>
  );
};

const styles = {
  wrapper: {
    page: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      flex: 1,
    },
    illustration: {
      width: 280,
      height: 180,
    },
  },
  text: {
    welcome: {
      fontSize: 30,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 10,
    },
  },
};

export default Splash;

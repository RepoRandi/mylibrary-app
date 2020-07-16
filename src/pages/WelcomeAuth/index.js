import React from 'react';
import {View, Text, Image} from 'react-native';
import ActionButton from './ActionButton';
import {colors} from '../../utils';
import {welcomeAuth} from '../../assets';

const WelcomeAuth = () => {
  return (
    <View style={styles.wrapper.page}>
      <View />
      <Image source={welcomeAuth} style={styles.wrapper.illustration} />
      <Text style={styles.text.welcome}>Selamat Datang Di MyLibrary</Text>
      <ActionButton
        desc="Silahkan Masuk, Jika Anda Sudah Memiliki Akun"
        title="MASUK"
      />
      <ActionButton
        desc="Atau Silahkan Daftar, Jika Anda Anda Belum Memiliki Akun"
        title="DAFTAR"
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
      marginBottom: 10,
    },
  },
  text: {
    welcome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.default,
      marginBottom: 76,
    },
  },
};

export default WelcomeAuth;

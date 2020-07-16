import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ActionButton = ({desc, title}) => {
  return (
    <View style={{marginBottom: 43, maxWidth: 225}}>
      <Text
        style={{
          fontSize: 10,
          color: 'grey',
          textAlign: 'center',
          paddingHorizontal: '15%',
          marginBottom: 6,
        }}>
        {desc}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#00B0FF',
          borderRadius: 25,
          paddingVertical: 13,
        }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const WelcomeAuth = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View
        style={{
          width: 219,
          height: 117,
          backgroundColor: '#00B0FF',
          marginBottom: 10,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#00B0FF',
          marginBottom: 76,
        }}>
        Selamat Datang Di MyLibrary
      </Text>
      <ActionButton
        desc="Silahkan Masuk, Jika Anda Sudah Memiliki Akun"
        title="MASUK"
      />
      <ActionButton
        desc="Atau Silahkan Daftar, Jika Anda Anda Belum Memiliki Akun"
        title="Daftar"
      />
    </View>
  );
};

export default WelcomeAuth;

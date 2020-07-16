import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Input, Button} from '../../components';
import {colors} from '../../utils';
import {IconBack} from '../../assets';
import {IllustrationRegister} from '../../assets';

const Register = () => {
  const [form, setForm] = useState({
    userName: '',
    fullName: '',
    email: '',
    password: '',
  });

  const sendData = () => {
    console.log('Data yg DiKirim:', form);
  };

  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    });
  };

  return (
    <View style={styles.wrapper.page}>
      <Image source={IconBack} style={styles.iconBack} />
      <IllustrationRegister
        width={200}
        height={150}
        style={styles.illustration}
      />
      <Text style={styles.text.desc}>
        Mohon Mengisi Beberapa Data Untuk Proses Daftar Anda
      </Text>
      <View style={styles.space(64)} />
      <Input
        placeholder="User Name"
        value={form.userName}
        onChangeText={(value) => onInputChange(value, 'userName')}
      />
      <View style={styles.space(33)} />
      <Input
        placeholder="Full Name"
        value={form.fullName}
        onChangeText={(value) => onInputChange(value, 'fullName')}
      />
      <View style={styles.space(33)} />
      <Input
        placeholder="Email"
        value={form.email}
        onChangeText={(value) => onInputChange(value, 'email')}
      />
      <View style={styles.space(33)} />
      <Input
        placeholder="Password"
        value={form.password}
        onChangeText={(value) => onInputChange(value, 'password')}
        secureTextEntry={true}
      />
      <View style={styles.space(33)} />
      <Button title="DAFTAR" onPress={sendData} />
    </View>
  );
};

const styles = {
  wrapper: {
    page: {
      padding: 20,
      backgroundColor: 'white',
      flex: 1,
    },
  },
  iconBack: {
    width: 25,
    height: 25,
  },
  illustration: {
    marginTop: 8,
  },
  text: {
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
      maxWidth: 200,
    },
  },
  space: (value) => {
    return {height: value};
  },
};
export default Register;

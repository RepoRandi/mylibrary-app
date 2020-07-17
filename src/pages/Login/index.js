import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IllustrationLogin} from '../../assets';
import {Button, Input} from '../../components';
import {setForm} from '../../redux';
import {colors} from '../../utils';

const Login = ({navigation}) => {
  const {form} = useSelector((state) => state.LoginReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('login :', form);
  });

  const sendData = () => {
    console.log('Data yg DiKirim:', form);
  };

  const onInputChange = (value, input) => {
    dispatch(setForm(input, value));
  };

  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Button type="icon" name="back" onPress={() => navigation.goBack()} />
        <IllustrationLogin
          width={200}
          height={150}
          style={styles.illustration}
        />
        <Text style={styles.text.desc}>
          Silahkan Mengisi Data Anda, Untuk Masuk Ke Aplikasi MyLibrary
        </Text>
        <View style={styles.space(64)} />
        <Input
          placeholder="User Name"
          value={form.username}
          onChangeText={(value) => onInputChange(value, 'username')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Password"
          value={form.password}
          onChangeText={(value) => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(100)} />
        <Button title="LOGIN" onPress={sendData} />
      </ScrollView>
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
export default Login;

import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {IllustrationLogin} from '../../assets';
import {Button, Input} from '../../components';
import {colors} from '../../utils';
import {connect} from 'react-redux';
import {login} from '../../redux/actions/auth';

const Login = (props) => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  // useEffect(() => {
  //   console.log('login :', props);
  // });

  const sendData = () => {
    // console.log('Data yg DiKirim:', data);
    props
      .login(data)
      .then(() => {
        alert('Login Sukses!');
        props.navigation.navigate('Home');
      })
      .catch((err) => {
        alert('Username Atau Password Salah!');
        console.log(err);
      });
  };

  const onInputChange = (value, input) => {
    setData({
      ...data,
      [input]: value,
    });
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
          value={data.username}
          onChangeText={(value) => onInputChange(value, 'username')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Password"
          value={data.password}
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {login};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

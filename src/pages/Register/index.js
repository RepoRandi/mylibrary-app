import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {IllustrationRegister} from '../../assets';
import {Button, Input} from '../../components';
import {colors} from '../../utils';
import {connect} from 'react-redux';
import {register} from '../../redux/actions/auth';

const Register = (props) => {
  const [data, setData] = useState({
    username: '',
    fullname: '',
    email: '',
    password: '',
    role: 2,
  });

  // useEffect(() => {
  //   console.log('Register :', data);
  // });

  const sendData = () => {
    console.log('Data yg DiKirim:', data);
    // Axios.post(url, data);
    props
      .register(data)
      .then(() => {
        alert('Register Sukses!');
        props.navigation.navigate('Login');
      })
      .catch((err) => {
        alert('Register Gagal!');
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
          value={data.userName}
          onChangeText={(value) => onInputChange(value, 'username')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Full Name"
          value={data.fullName}
          onChangeText={(value) => onInputChange(value, 'fullname')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Email"
          value={data.email}
          onChangeText={(value) => onInputChange(value, 'email')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Password"
          value={data.password}
          onChangeText={(value) => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(53)} />
        <Button title="DAFTAR" onPress={sendData} />
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

const mapDispatchToProps = {register};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

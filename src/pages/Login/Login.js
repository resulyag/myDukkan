import React from 'react';
import {SafeAreaView, View, Image, Alert} from 'react-native';
import {useDispatch} from 'react-redux';

import styles from './Login.style';

import {Formik} from 'formik';

import usePost from '../../hooks/usePost';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {data, loading, error, post} = usePost();
  function handleLogin(values) {
    post('https://fakestoreapi.com/auth/login', values);
  }

  if (error) {
    console.log('içinde error' + error);
    Alert.alert('Dükkan', 'Bir hata oluştu');
  }

  if (data) {
    console.log(data);
    if (data.status === 'Error') {
      Alert.alert('Dükkan', 'Kullanıcı Bulunamadı');
    } else {
      dispatch({type: 'SET_USER', payload: {user}});
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login-logoo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı adını giriniz..."
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder="Şifrenizi giriniz..."
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

const user = {
  address: {
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
    city: 'kilcoole',
    street: 'Lovers Ln',
    number: 7267,
    zipcode: '12926-3874',
  },
  id: 2,
  email: 'morrison@gmail.com',
  username: 'mor_2314',
  password: '83r5^_',
  name: {
    firstname: 'david',
    lastname: 'morrison',
  },
  phone: '1-570-236-7033',
  __v: 0,
};

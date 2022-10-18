import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './Products.style';
import Config from 'react-native-config';
import API_URL from '../../../manuelEnv';
// import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import {useDispatch, useSelector} from 'react-redux';

const Products = ({navigation}) => {
  const user = useSelector(s => s.user);
  const {loading, error, data} = useFetch(API_URL);

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View>
      <Text>Hoşgeldiniz: {user.username}</Text>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
};

export default Products;

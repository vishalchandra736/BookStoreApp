import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../style/GlobalStyle';

const TopBar = ({navigation}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: '3%',
      }}>
      <View style={styles.TopBar_Logo_View}>
        <Ionicons name="book" size={27} style={{color: '#A03037'}} />
        <Text style={{color: '#A03037', fontSize: 16, marginHorizontal: '6%'}}>
          Bookstore
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.TopBar_Cart_View}
          onPress={() => navigation.navigate('Cart')}>
          <Ionicons
            name="search-outline"
            style={{color: '#A03037', paddingHorizontal: '3%'}}
            size={27}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TopBar_Cart_View}
          onPress={() => navigation.navigate('Cart')}>
          <Ionicons
            name="heart-outline"
            style={{color: '#A03037', paddingHorizontal: '3%'}}
            size={27}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TopBar_Cart_View}
          onPress={() => navigation.navigate('Cart')}>
          <Ionicons
            name="md-cart-outline"
            style={{color: '#A03037', paddingHorizontal: '3%'}}
            size={27}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;

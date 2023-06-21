import {View, Text} from 'react-native';
import React from 'react';
import TopBar from '../component/TopBar';
import CartBox from '../component/CartBox';
import styles from '../style/GlobalStyle';

const Home = ({navigation}) => {
  return (
    <View style={styles.Flex}>
      <View>
        <TopBar navigation={navigation} />
      </View>
      <View style={styles.Home}>
        <Text style={styles.HomeBookText}>Books</Text>
        <Text style={styles.HomeText}>(128 Items)</Text>
      </View>
      <View>
        <CartBox />
      </View>
    </View>
  );
};

export default Home;

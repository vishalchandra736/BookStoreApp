import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import TopBar from '../component/TopBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../style/GlobalStyle';

const OrderPlace = ({navigation}) => {
  return (
    <View style={styles.Flex}>
      <View>
        <TopBar navigation={navigation} />
      </View>
      <Image
        style={styles.CheckImage}
        source={require('../asstes/checked.png')}
      />

      <View style={styles.OrderPlacedView}>
        <Text style={styles.OrderPlacedText}>Order Placed Successfully</Text>
      </View>
      <View style={styles.OrderDetailsView}>
        <Text style={styles.OrderDetailsText}>
          Hurray!!! Your Order is confirmed the order id is #9564853 save the
          order id for further communication.
        </Text>
      </View>
      <View style={styles.ContinueShoppingView}>
        <TouchableOpacity
          style={styles.ContinueShoppingButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.ContinueShoppingText}>CONTINUE SHOPPING</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ContactUsContainer}>
        <View style={styles.EmailView}>
          <MaterialCommunityIcons
            name="email"
            size={20}
            style={styles.LocationIcon}
          />
          <Text style={styles.Email}>admin@bookstore.com</Text>
          <Text style={styles.OnlyMargin}>|</Text>
          <MaterialCommunityIcons
            name="phone"
            size={20}
            style={styles.PhoneIcon}
          />
          <Text style={styles.PhoneNumber}>+91 8163475881</Text>
        </View>
        <View style={styles.AddressWrap}>
          <View style={styles.AddressView}>
            <MaterialIcons
              name="location-on"
              size={20}
              style={styles.LocationIcon}
            />
            <Text style={styles.AddressText}>
              42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near
              Kumarakom restaurant, HSR Layout, Bangalore 560034
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.CopyrightView}>
        <Text style={styles.CopyrightText}>
          Copyright @ 2023, Bookstore Private Limited. All Rights Reserved
        </Text>
      </View>
    </View>
  );
};

export default OrderPlace;

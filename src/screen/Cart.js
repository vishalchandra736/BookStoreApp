import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import TopBar from '../component/TopBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomerForm from '../component/CustomerForm';
import styles from '../style/GlobalStyle';
import {useSelector} from 'react-redux';

const Cart = ({navigation}) => {
  const [form, setForm] = useState(false);
  const cartData = useSelector(state => state.cartData);
  console.log('Cart Data', cartData);

  return (
    <View style={styles.Flex}>
      <View>
        <TopBar navigation={navigation} />
      </View>
      <View style={styles.CardBody}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={27}
            style={styles.BackArrow}
          />
        </TouchableOpacity>
        <Text style={styles.MyBag}>My Bag</Text>
      </View>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.BagViewOne}>
          <View style={styles.BagViewTwo}>
            <Image
              source={{
                uri: cartData.ImageUrl,
              }}
              style={{width: 100, height: 120}}
            />
            <View style={styles.ItemView}>
              <View style={styles.TitleView}>
                <Text style={styles.TitleText}>{cartData.BookName}</Text>
                <TouchableOpacity style={styles.Position}>
                  <MaterialCommunityIcons
                    name="close"
                    size={27}
                    style={styles.CloseIcon}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.SubTitleText}>by {cartData.Author}</Text>
              <Text style={styles.PriceText}>Rs. {cartData.Price}</Text>
              <View style={styles.QuantityView}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="minus-circle-outline"
                    size={30}
                    style={styles.IconColor}
                  />
                </TouchableOpacity>
                <Text style={styles.QuantityText}>1</Text>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="plus-circle"
                    size={30}
                    style={styles.IconColor}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => setForm(!form)}>
          <View style={styles.CustomerDetailsView}>
            <Text style={styles.CustomerDetailsText}>Customer Details</Text>
            <MaterialCommunityIcons
              name="plus"
              size={20}
              style={styles.PlusIcon}
            />
          </View>
        </TouchableOpacity>
        <CustomerForm
          visible={form}
          onRequestClose={() => setForm(!form)}
          hideModal={() => setForm(!form)}
        />
      </ScrollView>
      <View style={styles.PlaceOrderContainer}>
        <View style={styles.AmountView}>
          <View style={styles.AmountContainer}>
            <Text style={styles.TotalText}>Total</Text>
            <Text style={styles.Amount}>Rs. 5000</Text>
          </View>
          <View style={styles.PlaceOrderView} />
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderPlace')}
            style={styles.PlaceOrderButton}>
            <Text style={styles.PlaceOrderText}>PLACE ORDER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;

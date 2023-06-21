import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Card} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {addToBag} from '../redux/Action';
import {useDispatch, useSelector} from 'react-redux';

const Books = ({bookName, author, price, imageUrl}) => {
  const [showWishlist, setShowWishlist] = useState(true);
  const [addToBagIcon, setAddToBagIcon] = useState(true);
  const book = {
    BookName: bookName,
    Author: author,
    Price: price,
    ImageUrl: imageUrl,
  };
  const dispatch = useDispatch();

  const handleAddToBag = item => {
    setAddToBagIcon(!addToBagIcon);
    dispatch(addToBag(item));
  };

  return (
    <View
      style={{
        margin: '6%',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <Card>
        <Card.Cover source={{uri: imageUrl}} style={{padding: '10%'}} />
        <Card.Title
          title={bookName}
          subtitle={
            <Text style={{color: '#9D9D9D', fontSize: 10}}>by {author}</Text>
          }
          style={{color: '#0A0102', fontSize: 12}}
        />
        <Card.Content>
          <Text style={{fontSize: 15, fontWeight: 800, color: '#0A0102'}}>
            Rs. {price}
          </Text>
        </Card.Content>
        {addToBagIcon ? (
          <Card.Actions>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => setShowWishlist(!showWishlist)}
                style={{
                  borderWidth: 1,
                  borderColor: showWishlist ? '#9D9D9D' : '#A03037',
                  borderRadius: 5,
                  alignSelf: 'center',
                  padding: '3%',
                  margin: '4%',
                }}>
                <MaterialCommunityIcons
                  name={showWishlist ? 'cards-heart-outline' : 'cards-heart'}
                  size={25}
                  style={showWishlist ? null : {color: '#A03037'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#A03037',
                  borderRadius: 5,
                  margin: '3%',
                  paddingVertical: '6%',
                  paddingHorizontal: '10%',
                }}
                onPress={() => handleAddToBag(book)}>
                <Text
                  style={{fontSize: 12, color: '#ffffff', textAlign: 'center'}}>
                  ADD TO BAG
                </Text>
              </TouchableOpacity>
            </View>
          </Card.Actions>
        ) : (
          <Card.Actions style={{flexDirection: 'column'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFE7E8',
                borderColor: '#A03037',
                borderWidth: 1,
                borderRadius: 5,
                margin: '3%',
                width: '100%',
                paddingVertical: '6%',
                paddingHorizontal: '10%',
              }}
              onPress={() => handleAddToBag(book)}>
              <Text
                style={{fontSize: 12, color: '#A03037', textAlign: 'center'}}>
                ADD TO BAG
              </Text>
            </TouchableOpacity>
          </Card.Actions>
        )}
      </Card>
    </View>
  );
};

export default Books;

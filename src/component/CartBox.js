import {View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Books from './Books';
import styles from '../style/GlobalStyle';
import {myAxiosGetRequest} from '../controller/Controller';

const CartBox = () => {
  const [books, setBooks] = useState([]);

  const getBooksData = async () => {
    const response = await myAxiosGetRequest();
    const json = response.data;
    setBooks(json);
  };

  useEffect(() => {
    getBooksData();
  }, [])

  return (
    <View>
      <View style={styles.CardStyle}>
        <FlatList
          numColumns={2}
          data={books}
          renderItem={({item}) => (
            <View style={styles.CardFlatList}>
              <Books {...item} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default CartBox;

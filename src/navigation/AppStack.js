import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import Cart from '../screen/Cart';
import OrderPlace from '../screen/OrderPlace';

const AppStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="OrderPlace" component={OrderPlace} />
    </Stack.Navigator>
  );
};

export default AppStack;

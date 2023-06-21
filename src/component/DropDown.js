import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';

const DropDown = () => {
  const [value, setValue] = useState();

  const data = [
    {label: 'Sort by relevance', value: '1'},
    {label: 'Price: Low to High', value: '2'},
    {label: 'Price: High to Low', value: '3'},
    {label: 'Newly Arrived', value: '4'},
  ];

  return (
    <View style={{borderWidth: 1}}>
      <Dropdown
        data={data}
        search  
        labelField="label"
        valueField="value"
        placeholder="Sort by relevance"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
    </View>
  );
};

export default DropDown;

import {View, Text, TextInput, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomerForm = props => {
  const [checked, setChecked] = useState('first');
  return (
    <View>
      <Modal
        visible={props.visible}
        transparent={false}
        animationType="slide"
        onRequestClose={props.onRequestClose}
        style={{flex: 1, backgroundColor: '#00000070'}}>
        <View style={{justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={props.onRequestClose}
            style={{alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="close-circle"
              size={30}
              style={{color: '#A03037'}}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize: 18,
                color: '#333232',
                fontWeight: 'bold',
                marginHorizontal: '6%',
              }}>
              Customer Details
            </Text>
            <View style={{margin: '6%'}}>
              <View>
                <TextInput
                  placeholder="Name"
                  style={{
                    borderWidth: 1,
                    borderColor: '#DCDCDC',
                    paddingHorizontal: '5%',
                    marginVertical: '3%',
                  }}
                />
                <TextInput
                  placeholder="Phone Number"
                  style={{
                    borderWidth: 1,
                    borderColor: '#DCDCDC',
                    paddingHorizontal: '5%',
                    marginVertical: '3%',
                  }}
                />
                <TextInput
                  placeholder="Pincode"
                  style={{
                    borderWidth: 1,
                    borderColor: '#DCDCDC',
                    paddingHorizontal: '5%',
                    marginVertical: '3%',
                  }}
                />
                <TextInput
                  placeholder="Locality"
                  style={{
                    borderWidth: 1,
                    borderColor: '#DCDCDC',
                    paddingHorizontal: '5%',
                    marginVertical: '3%',
                  }}
                />
                <TextInput
                  placeholder="Address"
                  style={{
                    borderWidth: 1,
                    borderColor: '#DCDCDC',
                    paddingHorizontal: '5%',
                    marginVertical: '3%',
                  }}
                />
                <TextInput
                  placeholder="City/Town"
                  style={{
                    borderWidth: 1,
                    borderColor: '#DCDCDC',
                    paddingHorizontal: '5%',
                    marginVertical: '3%',
                  }}
                />
                <TextInput
                  placeholder="Landmark"
                  style={{
                    borderWidth: 1,
                    borderColor: '#DCDCDC',
                    paddingHorizontal: '5%',
                    marginVertical: '3%',
                  }}
                />
                <Text>Type</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <RadioButton
                      value="first"
                      status={checked === 'first' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('first')}
                    />
                    <Text>Home</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <RadioButton
                      value="second"
                      status={checked === 'second' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('second')}
                    />
                    <Text>Work</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <RadioButton
                      value="third"
                      status={checked === 'third' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('third')}
                    />
                    <Text>Other</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomerForm;

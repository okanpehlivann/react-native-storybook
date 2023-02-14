import {View, Text, TextInput} from 'react-native';
import React from 'react';

const Searchbar = () => {
  return (
    <View>
      <TextInput
        style={{backgroundColor: '#fff', borderWidth: 1, borderColor: 'gray'}}
        placeholder="Arama Yap"
      />
    </View>
  );
};

export default Searchbar;

import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Button from '../atoms/Button';
import Searchbar from '../atoms/Searchbar';

const SearchView = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
      }}>
      <Searchbar />
      <Button />
    </SafeAreaView>
  );
};

export default SearchView;

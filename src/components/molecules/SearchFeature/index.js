import React from 'react';
import {Image, TextInput, View} from 'react-native';

const SearchFeature = () => {
  return (
    <View style={{marginHorizontal: 18, flexDirection: 'row', paddingTop: 15}}>
      <View style={{position: 'relative', flex: 1}}>
        <TextInput
          placeholder="Search ?"
          style={{
            borderWidth: 2,
            borderColor: '#E8E8E8',
            borderRadius: 25,
            height: 40,
            backgroundColor: 'white',
            paddingLeft: 45,
            paddingRight: 20,
          }}
        />
        <Image
          style={{position: 'absolute', top: 8, left: 12}}
          source={require('../../../assets/iconNavigasi/search.png')}
        />
      </View>
      <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{position: 'absolute', top: 8, left: 12}}
          source={require('../../../assets/iconNavigasi/author-active.png')}
        />
      </View>
    </View>
  );
};

export default SearchFeature;

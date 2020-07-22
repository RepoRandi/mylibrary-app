import React from 'react';
import {Image, Text, View} from 'react-native';

const BookNews = () => {
  return (
    <View>
      <View style={{height: 17, backgroundColor: '#f2f2f4'}}></View>
      <View>
        <View style={{paddingTop: 16, paddingHorizontal: 18}}>
          <Image
            style={{height: 250, width: '100%', borderRadius: 6}}
            source={require('../../../assets/iconNavigasi/book10.jpg')}
          />
        </View>
        <View
          style={{
            paddingTop: 16,
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              backgroundColor: '#61A756',
              paddingHorizontal: 12,
              paddingVertical: 11,
              alignSelf: 'flex-end',
              borderRadius: 4,
              marginBottom: 4,
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
              }}>
              READ
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#E8E9ED',
            borderBottomWidth: 1,
            marginTop: 16,
            marginBottom: 20,
            marginHorizontal: 18,
          }}></View>
      </View>
    </View>
  );
};

export default BookNews;

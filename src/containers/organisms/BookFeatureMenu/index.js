import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import BookFeature from '../../../components/molecules/BookFeature';

class BookFeatureMenu extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 17, marginTop: 8}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#F5F5F5',
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
            borderWidth: 2,
            borderTopColor: '#E8E8E8',
            borderLeftColor: '#E8E8E8',
            borderRightColor: '#E8E8E8',
            borderBottomColor: '#F5F5F5',
            padding: 14,
          }}>
          <Text
            style={{
              color: '#43AB4A',
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            Ayo Membaca!
          </Text>
          <Image
            style={{width: 80, height: 80}}
            source={require('../../../assets/iconNavigasi/read.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',

            paddingTop: 20,
            paddingBottom: 14,
            backgroundColor: '#FAFAFA',
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
            borderWidth: 2,
            borderTopColor: '#FAFAFA',
            borderLeftColor: '#E8E8E8',
            borderRightColor: '#E8E8E8',
            borderBottomColor: '#E8E8E8',
          }}>
          <BookFeature
            title="New Book"
            img={require('../../../assets/iconNavigasi/new.png')}
          />
          <BookFeature
            title="Popular Book"
            img={require('../../../assets/iconNavigasi/popular.png')}
          />
          <BookFeature
            title="Favorite Book"
            img={require('../../../assets/iconNavigasi/favorit.png')}
          />
          <BookFeature
            title="History Book"
            img={require('../../../assets/iconNavigasi/histori.png')}
          />
        </View>
      </View>
    );
  }
}

export default BookFeatureMenu;

import React from 'react';
import {ScrollView, View} from 'react-native';
import {BookNews, SearchFeature} from '../../components/molecules';
import {
  BookFeatureMenu,
  BookGenreMenu,
  BottomNavigation,
  ScrollableBook,
} from '../../containers/organisms';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      {/* Content */}
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        {/* Search Bar */}
        <SearchFeature />
        {/* Batas Search Bar */}
        {/* Book Feature */}
        <BookFeatureMenu />
        {/* Batas Book Feature */}
        {/* Book Genre */}
        <BookGenreMenu />
        {/* Batas Book Genre  */}
        {/*Book News */}
        <BookNews />
        {/* Batas Book News */}
        {/* Book Populer  */}
        <ScrollableBook />
        {/* Batas Book Populer */}
      </ScrollView>
      {/* Batas Content */}
      {/* Bottom Menu */}
      <BottomNavigation />
      {/* Batas Bottom Menu */}
    </View>
  );
};

export default Home;

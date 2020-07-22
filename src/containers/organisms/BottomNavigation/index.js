import React, {Component} from 'react';
import {View} from 'react-native';
import BottomNavIcon from '../../../components/molecules/BottomNavIcon';

class BottomNavigation extends Component {
  render() {
    return (
      <View
        style={{
          height: 54,
          backgroundColor: 'white',
          flexDirection: 'row',
          borderTopWidth: 1,
          borderColor: '#E8E9ED',
        }}>
        <BottomNavIcon
          img={require('../../../assets/iconNavigasi/home-active.png')}
          title="HOME"
          active
        />
        <BottomNavIcon
          img={require('../../../assets/iconNavigasi/book.png')}
          title="BOOK"
        />
        <BottomNavIcon
          img={require('../../../assets/iconNavigasi/author.png')}
          title="AUTHOR"
        />
        <BottomNavIcon
          img={require('../../../assets/iconNavigasi/genre.png')}
          title="GENRE"
        />
        <BottomNavIcon
          img={require('../../../assets/iconNavigasi/account.png')}
          title="PROFILE"
        />
      </View>
    );
  }
}

export default BottomNavigation;

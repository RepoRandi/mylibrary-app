import React, {Component} from 'react';
import {View} from 'react-native';
import BookGenre from '../../../components/molecules/BookGenre';

class BookGenreMenu extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 18,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            flexWrap: 'wrap',
          }}>
          <BookGenre
            title="Adventure"
            img={require('../../../assets/iconNavigasi/adventure.png')}
          />
          <BookGenre
            title="fantasi"
            img={require('../../../assets/iconNavigasi/fantasi.png')}
          />
          <BookGenre
            title="Fiction"
            img={require('../../../assets/iconNavigasi/fiction.png')}
          />
          <BookGenre
            title="Religi"
            img={require('../../../assets/iconNavigasi/religi.png')}
          />
          <BookGenre
            title="Romance"
            img={require('../../../assets/iconNavigasi/romance.png')}
          />
          <BookGenre
            title="Sainst"
            img={require('../../../assets/iconNavigasi/sains.png')}
          />
          <BookGenre
            title="Teknologi"
            img={require('../../../assets/iconNavigasi/teknologi.png')}
          />
          <BookGenre
            title="More"
            img={require('../../../assets/iconNavigasi/go-more.png')}
          />
        </View>
      </View>
    );
  }
}

export default BookGenreMenu;

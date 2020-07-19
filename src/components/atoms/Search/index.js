import React from 'react';
import {SearchBar} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../../utils';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Search ?"
          placeholderTextColor={colors.default}
          onChangeText={this.updateSearch}
          value={search}
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInputContainer}
          inputStyle={styles.searchBarInput}
          searchIcon={styles.searchIcon}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  searchBarContainer: {
    backgroundColor: '#fff',
    borderTopColor: '#fff',
    borderBottomColor: '#fff',
    borderRadius: 25,
  },
  searchBarInputContainer: {
    backgroundColor: '#fafafa',
    borderRadius: 25,
  },
  searchBarInput: {
    fontSize: 20,
    fontFamily: 'Quicksand-Bold',
  },
  searchIcon: {
    width: 25,
  },
});

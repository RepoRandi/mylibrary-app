import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {ScrollableItem} from '../../../components/molecules';

class ScrollableBook extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
            marginHorizontal: 18,
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>
            Populer
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>
            See All
          </Text>
        </View>
        <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 18}}>
          <ScrollableItem
            img={require('../../../assets/imageBook/Komik-Jingga.jpg')}
            title="Jingga"
          />
          <ScrollableItem
            img={require('../../../assets/imageBook/JUDITH.jpg')}
            title="Judith"
          />
          <ScrollableItem
            img={require('../../../assets/imageBook/conflict_of_interest.jpg')}
            title="Conflict Of Interest"
          />
          <ScrollableItem
            img={require('../../../assets/imageBook/Demon_Slayer.jpg')}
            title="Demon Slayer"
          />
          <ScrollableItem
            img={require('../../../assets/imageBook/Unexpected-Relationshop.jpg')}
            title="Relationship"
          />
        </ScrollView>
        <View
          style={{
            borderBottomColor: '#E8E9ED',
            borderBottomWidth: 1,
            marginTop: 16,
            marginBottom: 20,
            marginHorizontal: 18,
          }}></View>
      </View>
    );
  }
}

export default ScrollableBook;

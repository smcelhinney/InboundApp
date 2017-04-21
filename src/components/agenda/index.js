import React, {Component, PureComponent} from 'react';
import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';

import AgendaItem from './agendaItem';
import styles from './styles';

export default class Agenda extends Component {
  static navigationOptions = {
    tabBarLabel: 'Agenda'
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      detailsShown: []
    }
    this.toggle = this.toggle.bind(this);
  }

  async _getData() {
    this.setState({loading: true});
    try {
      const response = await fetch('https://raw.githubusercontent.com/smcelhinney/InboundApp/master/data/talks.json');
      let data = await response.json();
      data = data.filter(d => d.date === this.props.searchDate);
      this.setState({data, loading: false});
    } catch (e) {
      console.error(e);
      this.setState({loading: false});
    }
  }

  componentDidMount() {
    this._getData();
  }

  toggle(itemId) {
    const detailsShown = [...this.state.detailsShown];
    console.log(detailsShown, itemId);
    if (detailsShown.indexOf(itemId) > -1) {
      detailsShown.splice(detailsShown.indexOf(itemId), 1);
    } else {
      detailsShown.push(itemId);
    }
    this.setState({detailsShown});
  }

  render() {
    return (
      <View>
        <View style={styles.filterOptionGroup}>
          <Text style={styles.filterOption}>By Time</Text>
          <Text style={styles.filterOption}>By Track</Text>
        </View>
        {this.state.data.length > 0
          ? (
            <ScrollView>
              <FlatList data={this.state.data} renderItem={({item}) => (<AgendaItem item={item}/>)} keyExtractor={(item) => item.id}/>
            </ScrollView>
          )
          : (
            <Text style={styles.noData}>No data for this day</Text>
          )}
      </View>
    )
  }
}

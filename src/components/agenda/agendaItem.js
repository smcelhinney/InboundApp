import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import styles from './styles';

export default class AgendaItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    // console.log(this.props.item);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const {item} = this.props;

    return (
      <View>
        <TouchableOpacity onPress={() => this.toggle()}>
          <View style={styles[`categoryType${item.category}`]}>
            <Text>{item.title}</Text>
            <View style={styles.agendaSplitRow}>
              <Text style={styles.italicise}>{item.time}</Text>
              <Text>{item.stage}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles[`agendaDetails${this.state.visible
            ? 'Open'
            : ''}`]}>
          <Text>{item.title}</Text>
          <Text>Category: {item.category}</Text>
        </View>
      </View>
    )
  }
}

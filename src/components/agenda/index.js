import React, {Component, PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const styles = StyleSheet.create({
  filterOptionGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'white',
    backgroundColor: 'grey'
  },
  filterOption: {
    padding: 20
  },
  baseCategoryStyle: {
    padding: 10,
    borderLeftWidth: 6,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderBottomColor: 'white'
  },
  agendaSplitRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  italicise: {
    fontStyle: 'italic'
  },
  get categoryTypeKeynote() {
    return Object.assign({
      borderLeftColor: '#F00'
    }, this.baseCategoryStyle);
  },
  get categoryTypeBreakout() {
    return Object.assign({
      borderLeftColor: '#A08'
    }, this.baseCategoryStyle);
  }
});

// TODO: Candidate for moving to external component
class AgendaItem extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.item);
  }

  render() {
    const {item} = this.props;
    return (
      <View style={styles[`categoryType${item.category}`]}>
        <Text>{item.title}</Text>
        <View style={styles.agendaSplitRow}>
          <Text style={styles.italicise}>{item.time}</Text>
          <Text>{item.stage}</Text>
        </View>
      </View>
    )
  }
}

// TODO: Candidate for moving to external component
class AgendaDetails extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidUpdate(){
    console.log(this.props);
  }

  render() {
    let viewRenderer = (<View/>);
    if (this.props.showDetails) {
      viewRenderer = (
        <View style={styles.agendaDetails}>
          <Text>Details</Text>
        </View>
      );
    }
    return viewRenderer;
  }
}

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
    console.log(this.props);
    this.toggle = this.toggle.bind(this);
  }

  // async _getData(){
  //   try {
  //     const response = await fetch('https://git.io/vSjbU');
  //     const data = await response.json();
  //     console.log(data);
  //     this.setState({data});
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  componentDidUpdate(prevProps) {
    console.log(this.state.detailsShown);
  }

  componentDidMount() {
    this.setState({loading: true});
    
    let data = [
      {
        category: 'Keynote',
        title: 'KEY-W01 - Keynote with Ta-Nehisi Coates',
        stage: 'Main Stage',
        time: '8:30AM - 10:00 AM Wed',
        date: '2016-11-08',
        id: 1
      }, {
        category: 'Breakout',
        title: 'KEY-W01 - Keynote with Ta-Nehisi Coates',
        stage: 'Main Stage',
        time: '8:30AM - 10:00 AM Wed',
        date: '2016-11-08',
        id: 2
      }, {
        category: 'Breakout',
        title: 'Blah blah',
        stage: 'Main Stage',
        time: '8:30AM - 10:00 AM Thu',
        date: '2016-11-09',
        id: 3
      }
    ];
    if (this.props.searchDate) {
      data = data.filter(d => d.date === this.props.searchDate);
    }
    this.setState({data});
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
        <ScrollView>
          <FlatList data={this.state.data} renderItem={({item}) => (
            <View>
              <TouchableOpacity onPress={() => this.toggle(item.id)}>
                <AgendaItem item={item}/>
              </TouchableOpacity>
              <AgendaDetails showDetails={this.state.detailsShown.indexOf(item.id) > -1}/>
            </View>
          )} keyExtractor={(item) => item.id}/>
        </ScrollView>
      </View>
    )
  }
}

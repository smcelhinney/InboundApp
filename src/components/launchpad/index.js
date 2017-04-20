import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity
} from 'react-native';

import {
  StackNavigator,
  NavigationActions
} from 'react-navigation';

import AgendaNavigation from '../agenda/navigation';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flex: 1,
    height: Dimensions.get('window').height
  },
  logoContainer: {
    height: 100,
    width: Dimensions.get('window').width,
    backgroundColor: 'grey',
    padding: 10
  },
  grid: {
    width: Dimensions.get('window').width,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  gridItem: {
    backgroundColor: 'pink',
    width: 100,
    height: (Dimensions.get('window').width / 100) * 20,
    margin: 10
  }
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const data = {
      gridData: [
        {id: 1, title: 'My Events', icon: ''},
        {id: 2, title: 'Agenda', icon: '', name: 'Agenda'},
        {id: 3, title: 'Speakers', icon: ''},
        {id: 4, title: 'Attendees', icon: ''},
        {id: 5, title: 'Social', icon: ''},
        {id: 6, title: 'Sponsors', icon: ''},
        {id: 7, title: 'Maps', icon: ''},
        {id: 8, title: 'Servers', icon: ''},
        {id: 9, title: 'Inbound', icon: ''}
      ]
    };
    this.setState({data});
  }

  renderGrid(items) {
    const navigationAction = (item) => {
      this.props.navigation.dispatch(NavigationActions.navigate({
        routeName: item.name,
      }));
    };

    return (
      <FlatList style={styles.grid} data={items} renderItem={({item}) => (
        <TouchableOpacity style={styles.gridItem} onPress={() => navigationAction(item)}>
          <Text key={item.id}>{item.title}</Text>
        </TouchableOpacity>
      )} keyExtractor={(item) => item.id}/>
    );
  }

  render() {
    const {gridData} = this.state.data;

    return (
      <View style={styles.body}>
        <Image style={styles.logoContainer} resizeMode="contain" source={require('../../assets/inbound_2017.png')}/>

        {this.renderGrid(gridData)}
      </View>
    )
  }
}

const InboundApp = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  // Events: {
  //   screen: Events,
  //   navigationOptions: {
  //     title: 'Events'
  //   }
  // }
  Agenda: {
    screen: AgendaNavigation
  },
  //
  // Speakers: {
  //   screen: Speakers,
  //   navigationOptions: {
  //     title: 'Speakers'
  //   }
  // },
});

export default InboundApp;

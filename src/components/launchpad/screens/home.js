import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Platform
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { ScreenContainer, GridImage, GridCell, GridText } from 'app/components/ui/theme/styledComponents';

const gridMargin = 15;

const styles = StyleSheet.create({
  logoContainer: {
    height: 150,
    width: Dimensions.get('window').width,
    padding: 10
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // margin: gridMargin,
    height: (Dimensions.get('window').height),
    display: 'flex'
  }
});

class GridItem extends Component {
  render() {
    let icon = this.props.item.icon;
    // Set a default icon
    if (this.props.item.icon === '') {
      icon = 'avatar.jpg';
    }

    if (Platform.OS === 'ios') {
      icon = icon.replace(/\.[^/.]+$/, '');
    }

    return (
      <GridCell gridWidth={(Dimensions.get('window').width - (gridMargin * 6)) / 3} gridMargin={gridMargin}>
        <GridImage
          source={{
            uri: icon
          }}
        />
        <GridText>{this.props.item.title}</GridText>
      </GridCell>
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const data = require('app/config/launchpad.json');
    this.setState({ data });
  }

  renderGrid(items) {
    const navigationAction = (item) => {
      const { routeName } = item;
      this.props.navigation.dispatch(NavigationActions.navigate({ routeName }));
    };

    return (
      <FlatList
        horizontal={false} numColumns={3} data={items} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigationAction(item)}>
            <GridItem item={item} />
          </TouchableOpacity>
      )} keyExtractor={(item, index) => index}
      />
    );
  }

  render() {
    const { gridData } = this.state.data;

    return (
      <ScreenContainer>
        <Image style={styles.logoContainer} resizeMode="contain" source={require('app/assets/inbound_2017.png')} />
        <View style={styles.gridContainer}>{this.renderGrid(gridData)}</View>
      </ScreenContainer>
    );
  }
}

export default Home;

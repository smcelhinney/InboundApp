import React  from 'react'; //eslint-disable-line
import {
  StackNavigator,
} from 'react-navigation';

import Home from './screens/home';
import Maps from '../maps';
import AgendaNavigation from '../agenda/navigation';

const InboundApp = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      headerVisible: false
    }
  },
  Maps: {
    screen: Maps,
  },
  Agenda: {
    screen: AgendaNavigation
  },
}, {
  headerMode: 'screen'
});

export default InboundApp;

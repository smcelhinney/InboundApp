import React  from 'react'; //eslint-disable-line
import {
  StackNavigator,
} from 'react-navigation';

import Home from './screens/home';
import AgendaNavigation from '../agenda/navigation';

const InboundApp = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      headerVisible: false
    }
  },
  Agenda: {
    screen: AgendaNavigation
  },
}, {
  headerMode: 'screen'
});

export default InboundApp;

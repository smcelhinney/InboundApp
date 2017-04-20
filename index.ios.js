import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';

import AgendaNavigation from './src/components/agenda/navigation';

const InboundApp = StackNavigator({
  Agenda: {
    screen: AgendaNavigation
  }
});

AppRegistry.registerComponent('InboundApp', () => InboundApp);

import React from 'react';
import {TabNavigator} from 'react-navigation';
import Agenda from './index'

const datesArray = [
  {
    display: 'Tue Nov 8',
    date: '2016-11-08'
  }, {
    display: 'Wed Nov 9',
    date: '2016-11-09'
  }, {
    display: 'Thu Nov 10',
    date: '2016-11-10'
  }, {
    display: 'Fri Nov 11',
    date: '2016-11-11'
  }
];

const navigationObj = {};
datesArray.forEach((dateObj, i) => {
  navigationObj[`NavigationObj${i}`] = {
    navigationOptions: ({navigation}) => ({title: dateObj.display}),
    screen: props => <Agenda {...props} searchDate={dateObj.date} />
  }
});

const AgendaNavigation = TabNavigator(navigationObj, {
  tabBarOptions: {
    activeTintColor: '#FFF',
    activeBackgroundColor: '#F90'
  }
});

export default AgendaNavigation;

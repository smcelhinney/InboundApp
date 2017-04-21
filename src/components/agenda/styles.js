import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
    borderLeftWidth: 6
  },
  agendaSplitRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  agendaDetails: {
    height: 0,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderBottomColor: 'white'
  },
  get agendaDetailsOpen() {
    return Object.assign({}, this.agendaDetails, {
      height: 'auto',
      minHeight: 200,
      padding: 10
    });
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

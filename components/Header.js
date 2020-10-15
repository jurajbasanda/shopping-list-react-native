import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={style.header}>
      <Text style={style.headerText}>{title}</Text>
    </View>
  );
};
Header.defaultProps = {title: 'Header'};

const style = StyleSheet.create({
  header: {
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: '#656',
    height:60,
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
});

export default Header;

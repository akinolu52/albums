import React from 'react';
import {
  View,
  Text
} from 'react-native';

const Header = (props) => {
  const { textStyles, viewStyles } = styles;
  return (
    <View style={viewStyles}>
      <Text style={textStyles}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyles: {
    padding: 20,
    backgroundColor: '#F8F8F8',
    elevation: 2,
    position: 'relative',
    height: 50
  },
  textStyles: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

export default Header
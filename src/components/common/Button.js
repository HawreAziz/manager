import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';



const Button = ({ children, onPress }) => {
  return (
      <TouchableOpacity onPress={onPress} style={styles.buttonStyle} >
        <Text style={styles.butnTextStyle}>{children}</Text>
      </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  buttonStyle: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  butnTextStyle: {
    fontSize: 20,
  }
});


export {Button};

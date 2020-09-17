import React from 'react';
import { View, StyleSheet } from 'react-native';


const Card = ({ children }) => {
  return (<View style={styles.container}>
         {children}
         </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: '#ddd',
    shadowOffset: { width: 0, height: 1 },
    elevation: 10,
  }
});


export { Card };

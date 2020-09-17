import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { CardSection } from './CardSection';



const Input = (prop) => {
  const { label,
          onChangeText,
          placeholder,
          secureTextEntry,
          value,
          keyboardType} = prop;
  return (
      <View style={{ flex: 1, flexDirection: 'row' }} >
        <Text style={styles.textStyle}>{label}</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          autoCorrect={false}
          autoCapitalize='none'
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType ? keyboardType : 'default'}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    alignSelf: 'center',
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    flex: 2,
    lineHeight: 23,
    paddingRight: 20,
    fontSize: 20
  }
});


export { Input };

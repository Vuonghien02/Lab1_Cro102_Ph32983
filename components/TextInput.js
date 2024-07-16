import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

const TextInput = (props) => {
  return <RNTextInput style={styles.textInput} {...props} />;
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});

export default TextInput;
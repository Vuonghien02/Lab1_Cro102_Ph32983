import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Block = ({ title, children }) => {
  return (
    <View style={styles.block}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    padding: 20,
    marginVertical: 10,
  },
  title: {
    color: '#007BFF', // Màu sắc thương hiệu
    fontSize: 18,
    marginBottom: 10,
  },
  content: {
    // Nội dung sẽ được đặt ở đây
  },
});

export default Block;
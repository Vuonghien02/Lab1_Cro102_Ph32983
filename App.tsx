import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import Block from './components/Block';
import Banner from './components/Banner';
import Button from './components/Button';
import TextInput from './components/TextInput';
import { ThemeProvider, useTheme } from './components/Theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegistrationScreen = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={theme === 'light' ? styles.lightContainer : styles.darkContainer}>
      <SafeAreaView style={{flex:1}}>
      <Banner source={require('./images/image2.png')}/>
      <Block title="Thông tin cá nhân">
        <TextInput placeholder="Họ và tên" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Số điện thoại" />
      </Block>
      <Block title="Thông tin khóa học">
        <TextInput placeholder="Tên khóa học" />
        <TextInput placeholder="Thời gian học" />
      </Block>
      <Block title="Thông tin liên hệ">
        <TextInput placeholder="Địa chỉ" />
        <TextInput placeholder="Số điện thoại liên hệ" />
      </Block>
      <Button title="Đăng ký" onPress={() => { /* Xử lý đăng ký */ }} />
      <Button title="Đổi Theme" onPress={toggleTheme} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
  },
});

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <ThemeProvider>
          <RegistrationScreen />
        </ThemeProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
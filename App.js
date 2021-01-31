import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import Main from './src/component/mainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './src/redux/configureStore';
import { connectServer } from './src/socketWork/socketConnection';
const store = ConfigureStore();



export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

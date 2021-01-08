import React from 'react';
import { StyleSheet} from 'react-native';
import Main from './component/mainComponent';




export default function App() {
  return (
     <Main/>
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

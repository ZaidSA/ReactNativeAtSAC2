import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginComponent from './Components/LoginComponent';
import FAQComponent from './Components/FAQComponent';
import PostComponent from './Components/PostComponent';

export default function App() {
  return <View style={styles.container}>
    <PostComponent></PostComponent>
  </View>//<FAQComponent></FAQComponent>//(<LoginComponent></LoginComponent>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    
  },
  title: {
    color: '#ff0000',
    fontSize: 25,
    borderWidth: 10,
    borderColor: 'red',
    borderRadius: 20,
    fontWeight: 'bold',
    fontFamily: 'Zapfino'
  },
  view1: {
    flex: 0.5,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    
    flexWrap: 'wrap',
    alignContent: 'flex-end'
  },
  view2: {
    flex: 0.3,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  view3: {
    flex: 0.2,
    backgroundColor: 'yellow',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%'
  }
});

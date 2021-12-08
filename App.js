/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react'
 import {
   StyleSheet,
   SafeAreaView,
   Text,
   TextInput,
 } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
 
 const App = () => {
  const [text, setText] = useState('');
     return (
       <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
         <TextInput
          style={styles.input}
          placeholder="Search for a book..."
          onChangeText={text => setText(text)}
          defaultValue={text}
         />
        <Text style={{padding: 10, fontSize: 42}}>
          {text.split(' ').map((word) => word).join(' ')}
        </Text>
       </SafeAreaView>
     )
 }
 
 const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.black,
    paddingTop: 40,
    paddingLeft: 20,
    paddingBottom: 40,
    height: 40,
    width: 350,
    marginTop: 50,
    marginLeft: 20,
    borderWidth: 1,
    fontSize:20,
  },
});
 
 export default App;

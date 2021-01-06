import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => {
  return  (
      <>
      <View>
        <View style={{width:80,height:80,backgroundColor:'red'}}/>
        <Islami/>
        <Text>Ahmad</Text>
        <Text>Fajar</Text>
        <Text>Islami</Text>
        <Gambar/>
        </View>
        <TextInput style={{borderWidth:1}} />
      </>
    )
};

const Islami = () => {
  return <Text>Islami</Text>;
};

const Gambar= ()=>{
  return <Image source={{uri:'https://placeimg.com/100/100/tech'}} style={{width:100,height:100}} />
}

export default App;
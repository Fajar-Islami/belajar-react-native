import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const SampleComponent = () => {
  return (
    <>
      <View>
        <View
          style={{
            width: 80,
            height: 80,
            backgroundColor: 'red',
          }}
        />
        <Islami />
        <Text>Ahmad</Text>
        <Text>Fajar</Text>
        <Text>Islami</Text>
        <Gambar />
        <Animal />
      </View>
      <TextInput
        style={{
          borderWidth: 1,
        }}
      />
    </>
  );
};

const Islami = () => {
  return <Text>Islami</Text>;
};

const Gambar = () => {
  return (
    <Image
      source={{
        uri: 'https://placeimg.com/100/100/tech',
      }}
      style={{
        width: 100,
        height: 100,
      }}
    />
  );
};

class Animal extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: 'https://placeimg.com/100/100/animals',
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
        />
        <Text style={{color: 'blue', fontSize: 24}}>Ini hewan</Text>
      </View>
    );
  }
}

export default SampleComponent;

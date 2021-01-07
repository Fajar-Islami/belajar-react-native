import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import FlexBox from './pages/Flexbox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';

const App = () => {
  const [isShow, setisShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setisShow(false);
  //   }, 6000);
  // }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent /> */}
        {/* <FlexBox /> */}
        {/* <FlexBox /> */}
        {/* <Position /> */}
        <PropsDinamis />
      </ScrollView>
    </View>
  );
};

export default App;

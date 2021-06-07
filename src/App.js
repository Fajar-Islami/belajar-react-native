import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import BasicJavascript from './pages/BasicJavascript';
import Communication from './pages/Communication';
import FlexBox from './pages/Flexbox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import ReactNativeSvg from './pages/ReactNativeSvg';
import SampleComponent from './pages/SampleComponent';
import StateDinamis from './pages/StateDinamis';
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
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* <FlexBox /> */}
        {/* <FlexBox /> */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        {/* <BasicJavascript /> */}
        <ReactNativeSvg />
      </ScrollView>
    </View>
  );
};

export default App;

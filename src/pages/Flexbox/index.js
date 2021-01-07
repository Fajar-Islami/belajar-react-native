import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

export class FlexBox extends Component {
  constructor(props) {
    super(props);
    console.log('==> construstor');
    this.state = {
      subscriber: 200,
    };
  }

  componentDidMount() {
    console.log('==> componentDidMount');
    setTimeout(() => {
      this.setState({
        subscriber: 400,
      });
    }, 2000);
  }

  componentDidUpdate() {
    console.log('==> componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('==> componentWillUnmount');
  }

  render() {
    console.log('==> render');
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
          <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
          <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
          <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={{uri: 'https://placeimg.com/100/100/people'}}
            style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Ini Judul</Text>
            <Text>{this.state.subscriber} rb subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBox;

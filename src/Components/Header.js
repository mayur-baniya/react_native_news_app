import React from 'react';
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import {deviceHeight} from './Dimensions';

const Header = props => {


  const OpenUrl = () => {
    const username = 'tashhi_z';
    const url = `tg://resolve?domain=${username}`;
  
    Linking.openURL(url).catch(err =>
      console.warn('error opening telegram profile', err),
    );
  };
  

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 10,
      }}>
      <Text
        style={{
          fontSize: 27,
          marginLeft: 30,
          color: 'white',
          fontWeight: 'bold',
        }}>
        {props.headline}
      </Text>
      <View>
        <TouchableOpacity onPress={OpenUrl}>
          <Image
            source={require('../images/tg-white.png')}
            style={{height: 40, width: 40, marginRight: 20}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

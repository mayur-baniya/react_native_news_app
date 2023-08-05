import React from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import Config from '../../config/Config';
import Categories from '../Components/Cetegories';
import Header from '../Components/Header';
import {deviceHeight, deviceWidth} from '../Components/Dimensions';
import TrendingNews from '../Components/TrendingNews';

const HomeScreen = ({navigation}) => {


  return (
    <View>
      <StatusBar
        hidden={true}
        barStyle="light-content"
        backgroundColor="black"
      />
      <ImageBackground
        source={require('../images/bg.png')}
        style={{height: deviceHeight, width: deviceWidth}}
        blurRadius={60}
      />

      <ScrollView style={{position: 'absolute'}}>

        <Header headline="Trending"  />
        <Categories navigation={navigation}/>
        <TrendingNews navigation={navigation} />


        <Text
          style={{
            color: 'black',
            marginTop: 10,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {' '}
          ________
        </Text>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

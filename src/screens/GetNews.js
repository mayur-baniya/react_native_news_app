import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../Components/Header';
import {deviceHeight, deviceWidth} from '../Components/Dimensions';
import Config from '../../config/Config';

const GetNews = ({route}) => {
  const {ct, navigation} = route.params;

  const [news, setNews] = useState([]);

  const setNewsData = () => {
    const URL = `https://newsapi.org/v2/top-headlines?category=${ct}&country=in&apiKey=${Config.API_KEY}`;
    fetch(URL)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        setNews(response.articles);
        console.log(news.length);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(setNewsData, []);
  return (
    <View>
      <ImageBackground
        source={require('../images/bg.png')}
        style={{height: deviceHeight, width: deviceWidth}}
        blurRadius={60}
      />
      <View style={{position: 'absolute'}}>
        <Header headline={ct} />
        {news.length > 0 ? (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {news.map((nw, index) => (
              <TouchableOpacity key={index} onPress={()=>navigation.navigate('WEBVIEW', {url: nw.url})}>
                <View  style={{margin: 10, marginTop: 50}}>
                  {nw.urlToImage ? (
                    <Image
                      source={{uri: nw.urlToImage}}
                      style={{
                        width: deviceWidth - 100,
                        height: deviceHeight - 300,
                        borderRadius: 50,
                        borderWidth: 1,
                        borderColor: 'white',
                      }}
                    />
                  ) : null}
                  <Text
                    style={{
                      textAlign: 'justify',
                      width: deviceWidth - 100,
                      fontSize: 16,
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    {nw.title.slice(0, 50)}
                    <Text style={{fontSize: 12}}>... read more</Text>
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) :(
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: deviceHeight - 500,
                marginLeft: '55%'
              }}>
              <ActivityIndicator color="yellow" size="large" />
            </View>
          )}
      </View>
    </View>
  );
};

export default GetNews;

import React, {useState, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Config from '../../config/Config';
import {deviceHeight, deviceWidth} from './Dimensions';

const TrendingNews = ({navigation}) => {
  const [news, setNews] = useState([]);

  const setNewsData = () => {
    const URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${Config.API_KEY}`;
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
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
      {news.length > 0 ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {news.map((nw, index) => (
            <TouchableOpacity key={index} onPress={()=>navigation.navigate('WEBVIEW',{url: nw.url})}>
              <View
                style={{
                  margin: 10,
                  borderColor: 'black',
                  alignContent: 'center',
                }}>
                {nw.urlToImage ? (
                  <Image
                    source={{uri: nw.urlToImage}}
                    style={{
                      width: deviceWidth - 100,
                      height: deviceHeight - 300,
                      borderRadius: 50,
                      borderWidth: 2,
                      borderColor: 'white',
                    }}
                  />
                ) : null}
                <Text
                  style={{
                    color: 'black',
                    width: deviceWidth - 110,
                    textAlign: 'justify',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {nw.title.slice(0, 50)}...
                  <Text style={{fontSize: 12}}>read more</Text>
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: deviceHeight - 500,
          }}>
          <ActivityIndicator color="yellow" size="large" />
        </View>
      )}
    </View>
  );
};

export default TrendingNews;

import React from 'react'
import { Text, View } from 'react-native'
import {WebView} from 'react-native-webview';

const WebViewComponent = ({route}) => {

  const {url} = route.params;

  return (
    <WebView source={{uri: url}} />
  )
}

export default WebViewComponent
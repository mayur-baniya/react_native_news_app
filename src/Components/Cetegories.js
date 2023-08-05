import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

const Category = [
  'Entertainment',
  'Technology',
  'Science',
  'Sports',
  'Health',
  'Business',
  'Business',
];

const Categories = ({navigation}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {Category.map((ct, index) => (
        <TouchableOpacity  key={index} onPress={()=>navigation.navigate('NEWS', {ct, navigation})}>
          <View>
            <Text
              style={{
                color: 'black',
                padding: 5,
                borderWidth: 1,
                borderColor: 'white',
                backgroundColor: '#F7E439',
                margin: 5,
                borderRadius: 5,
                fontWeight: 'bold',
              }}>
              {ct}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;

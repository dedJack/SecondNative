import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenTypeProp} from '../types';
import {useNavigation} from '@react-navigation/native';

type AboutScreenNavigationProp = StackNavigationProp<
  StackScreenTypeProp,
  'About'
>;
const AboutScreen: React.FC = () => {
  const navigation = useNavigation<AboutScreenNavigationProp>();

  return (
    <View>
      <Text>About Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="shubham section" onPress={() => navigation.navigate("Profile",{userId:"Shubham choudhary",age:50})} />
    </View>
  );
};

export default AboutScreen;

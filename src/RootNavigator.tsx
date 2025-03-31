import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import {StackScreenTypeProp} from './types';
import AboutScreen from './screens/AboutScreen';

//Create prop type for every screen, Here i have created a prop type, But later i have move it to the another TypeScript file, as it is used by every screen.
{
  /*
export type StackScreenTypeProp = {
    "Home" : undefined;
    "Profile" : undefined;
}
    */
}

//create a stack navigator here. and pass the prop type in it.
const Stack = createStackNavigator<StackScreenTypeProp>();
const RootNavigator: React.FC = () => {
  return (
    //Here Stack.Navigator is working as Router.
    //And Stack.screen is working as Routes.
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

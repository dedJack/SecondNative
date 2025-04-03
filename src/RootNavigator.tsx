import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import {StackScreenTypeProp} from './types';
import FlatLiseDemo from './screens/FlatLiseDemo';


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
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='FlatList' component={FlatLiseDemo}/>
    </Stack.Navigator>
  );
};

export default RootNavigator;

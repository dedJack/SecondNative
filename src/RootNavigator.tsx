import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import {StackScreenTypeProp} from './types';
import FlatListDemo from './screens/FlatListDemo';
import SectionListDemo from './screens/SectionListDemo';
import TouchableWithoutFeedbackDemo from './screens/TouchableWithoutFeedbackDemo';
import ModelDemo from './screens/ModelDemo';
import PullToRefreshDemo from './screens/PullToRefreshDemo';
import AxiosScreenDempo from './screens/AxiosScreenDemo';
import DataFetchingDemo from './screens/DataFetchingDemo';
import ThemeScreen from './screens/ThemeScreen';

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
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FlatList" component={FlatListDemo} />
      <Stack.Screen name="SectionList" component={SectionListDemo} />
      <Stack.Screen
        name="TouchableScreen"
        component={TouchableWithoutFeedbackDemo}
      />
      <Stack.Screen name="ModelScreen" component={ModelDemo} />
      <Stack.Screen name="PullToRefresh" component={PullToRefreshDemo} />
      <Stack.Screen name="AxiosDemo" component={AxiosScreenDempo} />
      <Stack.Screen name="FetchDemo" component={DataFetchingDemo} />
      <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

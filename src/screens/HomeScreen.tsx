import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {StackScreenTypeProp} from '../types';

//create a type of Prop for HomeScreen.
type HomeScreenNavigationprop = StackNavigationProp<
  StackScreenTypeProp,
  'Home'
>;

const subject = [
  {
    id: 1,
    name: 'FlatLst item',
    screen: 'FlatList',
  },
  {
    id: 2,
    name: 'SectionList item',
    screen: 'SectionList',
  },
  {
    id: 3,
    name: 'Touchable Demo',
    screen: 'TouchableScreen',
  },
  {
    id: 4,
    name: 'Model Demo',
    screen: 'ModelScreen',
  },
  {
    id:5,
    name:"Pull to refresh Demo",
    screen:"PullToRefresh",
  },
  {
    id:6,
    name:"Axios Screen",
    screen:"AxiosDemo",
  },
  {
    id:7,
    name:"Fetch Screen",
    screen:"FetchDemo",
  },
  {
    id:8,
    name:"Theme Screen",
    screen:"ThemeScreen",
  },
];
type Props = {
  navigation: HomeScreenNavigationprop;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  //UseNavigation is used to navigate to another screen.
  // const navigation = useNavigation<HomeScreenNavigationprop>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Home Screen </Text>
      <FlatList
        data={subject}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.btnConatiner}
            onPress={
              () =>
                navigation.navigate(item.screen as keyof StackScreenTypeProp) //this is use to pass the screen name from object
            }>
            <Text style={styles.btnText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  btnConatiner: {
    margin: 10,
    paddingHorizontal: 15,
    backgroundColor:"#808873",
    paddingVertical: 15,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

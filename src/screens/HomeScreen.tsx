import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, View, Text, Button} from 'react-native';
import {StackScreenTypeProp} from '../types';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

//create a type of Prop for HomeScreen.
type HomeScreenNavigationprop = StackNavigationProp<
  StackScreenTypeProp,
  'Home'
>;

const HomeScreen: React.FC = () => {

  //UseNavigation is used to navigate to another screen.
  const navigation = useNavigation<HomeScreenNavigationprop>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Home Screen </Text>
      <Button
        title="FlatList Example"
        onPress={() => navigation.navigate('FlatList')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkgrey',
    alignItems: 'center',
    paddingTop: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  btnContainer: {
    // flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default HomeScreen;

import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, View, Text, Button} from 'react-native';
import {StackScreenTypeProp} from '../types';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

//create a type of Prop for profileScreen.
type ProfileScreenNavigationProp = StackNavigationProp<
  StackScreenTypeProp,
  'Profile'
>;

//Route Prop- It is used whenever we want to show data in this screen that is passed from another Screens.
//route Prop - provides information about the current route, including its parameters and place in the navigation hierarchy
type ProfileRouteProp = RouteProp<StackScreenTypeProp, 'Profile'>;

const ProfileScreen: React.FC = () => {
  const route = useRoute<ProfileRouteProp>();
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My name is :{route.params.userId}</Text>
      <Text style={styles.header}>My Age is :{route.params.age}</Text>
      <Button
        title="About Section"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkgrey',
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;

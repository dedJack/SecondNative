import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, View, Text, Button} from 'react-native';
import {StackScreenTypeProp} from '../types';
import {useNavigation} from '@react-navigation/native';

//create a type of Prop for profileScreen.
type ProfileScreenNavigationProp = StackNavigationProp<
  StackScreenTypeProp,
  'Profile'
>;

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
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

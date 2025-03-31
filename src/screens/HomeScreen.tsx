import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, View, Text, Button} from 'react-native';
import {StackScreenTypeProp} from '../types';

//create a type of Prop for HomeScreen.
type HomeScreenNavigationProp = StackNavigationProp<StackScreenTypeProp>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Screen</Text>
      <View style={styles.btnContainer}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
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
  btnContainer: {
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default HomeScreen;

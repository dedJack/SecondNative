import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, View, Text, Button} from 'react-native';
import {StackScreenTypeProp} from '../types';

//create a type of Prop for HomeScreen.
type HomeScreenNavigationprop = StackNavigationProp<
  StackScreenTypeProp,
  'Home'
>;

const HomeScreen: React.FC = () => {
  //useNavigation is use to navigate form one screen to another.
  const navigation = useNavigation<HomeScreenNavigationprop>();
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Home Screen </Text>
      <View style={styles.btnContainer}>
        <Button
          title="Aman Section"
          onPress={() =>
            navigation.navigate('Profile', {userId: 'Aman', age: 22})
          }
        />
        <Button
          title="Isha Section"
          onPress={() =>
            navigation.navigate('Profile', {userId: 'Isha', age: 24})
          }
        />
        <Button
          title="About Section"
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

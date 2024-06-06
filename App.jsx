//home page
// importing necessary packages 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ReactDOM from 'react-dom';

//connecting files together 
import Navbar from './Navbar'; 
import SearchComponent from './Search';


export default function App() {
  return (
    /*inlcude <Stack.Screen name="Home" component={HomeScreen} /> for the HomeScreen content*/ 
    /*Everything relating frontend and customer facing view has to be within the SafeAreaView */
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SearchComponent />
      </View>
      <View style = {styles.menuSheet}>
        <Navbar />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'bottom',
    justifyContent: 'flex-end',
  },
  menuSheet: {
    width: '100%',
    zIndex:1,
    color: 'grey'
  },
  searchSheet: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    zIndex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 680,
  },
  cartIcon: {
    marginLeft: 5, // Adjust the margin as needed to create space between the search bar and the cart icon
  },
});

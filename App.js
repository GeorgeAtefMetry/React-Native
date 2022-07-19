import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import Header from './header';
import Info from './info';
import Skills from './skills';
import { Button } from "@rneui/themed";
import Lang from './lang';
import Movies from './movies';
import Details from './movieDetails';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Todo from './ToDo';
import ContactForm from './form';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <ScrollView style={styles.contentContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Header} />
          <Stack.Screen name="info" component={Info} />
          <Stack.Screen name="lang" component={Lang} />
          <Stack.Screen name="movies" component={Movies} />
          <Stack.Screen name="details" component={Details} />
          <Stack.Screen name="todo" component={Todo} />
          <Stack.Screen name="form" component={ContactForm} />
        </Stack.Navigator>
      </NavigationContainer>
    // </ScrollView>  

        
    //    <View style={styles.container}>
    //     <StatusBar style="auto" />

    //     <Header></Header>
        

    //     <Info title='age' value='23'></Info>
    //     <Info title='Residence' value='Egypt'></Info>
    //     <Info title='Freelance' value='Avaiable'></Info>
    //     <Info title='Address' value='Qena, Naqada'></Info>
    //     <View style={styles.hr}></View>

    //     <Lang></Lang>
    //     <View style={styles.hr}></View>

    //     <Skills skill='HTML' value="90%" width="90%"></Skills>
    //     <Skills skill='CSS' value="80%" width="80%"></Skills>
    //     <Skills skill='JS' value="70%" width="70%"></Skills>
    //     <Skills skill='React' value="50%" width="50%"></Skills>
    //     <View style={styles.hr}></View>

    //     <Button  
    //     buttonStyle={{ backgroundColor: 'yellow' }} 
    //     titleStyle={{
    //       color: '#000',
    //       marginHorizontal: 20,
    //     }}
    //     style={styles.lastElem} title="Download CV" />
    //   </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    

  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  hr:{
    borderBottomColor:'#ddd',
    borderBottomWidth:2,
    marginTop:30,
    marginBottom:10,
    width:350,
    marginLeft:30
  },
  lastElem:{
    marginTop:40
  }
});

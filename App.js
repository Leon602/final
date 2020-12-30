import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View,Button,Image } from 'react-native';
//import style from './src/style';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductList from './src/productlist';
import styles from './src/style';
import { ScreenStackHeaderLeftView } from 'react-native-screens';



//import producut from './src/product';
//頁面的跳轉
function HomeScreen({navigation}){
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={styles.top1} source={require("./assets/title.png")}/>
      <Image style={styles.top} source={require("./assets/IMG_0446.jpeg")}/>
      
      <Button
        title="開始遊戲"
        onPress={() => navigation.navigate("Details")} />

        <Button
        title='邦掉'
        onPress={()=> navigation.navigate('邦掉')}/>
    </View>
  );
}
function DetailsScreen({navigation}) {
   
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="下一頁"
        onPress={() => navigation.navigate('Details2')}/>    
        
    </View>
  );
}
function productlist({navigation}){
  return(
    <View style={styles.container}>
      <productlist/>
    <Button
      title='go back'
      onPress={()=> navigation.navigate('首頁')} />
    </View>

  );
}
function DetailsScreen2({navigation}){
  
  return(
    
    <View style={styles.page} >
        <Text>Details Screen2</Text>

    </View>
  );
}



const Stack = createStackNavigator();


export default function App() {
  return (
    // <View style={style.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <Button
    //     style={style.buttom}
    //     title="Press me"
    //     onPress={() => Alert.alert('Simple Button pressed')}
    //   />
    
    // </View>
    <NavigationContainer>

      <Stack.Navigator>
      
        <Stack.Screen name="首頁" component={HomeScreen} />  
        {/* 改導覽列開頭 */}
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="邦掉" component={ProductList}/>
        <Stack.Screen name="Details2" component={DetailsScreen2}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}
;

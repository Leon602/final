import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Text, View,Button,Image } from 'react-native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductList from './src/productlist';
import styles from './src/style';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
import { TextInput } from 'react-native-gesture-handler';
import one from './src/123';



//import producut from './src/product';
//頁面的跳轉
function HomeScreen({navigation}){
  
  return (
   

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={styles.top1} source={require("./assets/title.png")}/>
      <Image style={styles.top} source={require("./assets/IMG_0446.jpeg")}/>
      <Button
        title="開始遊戲"
        onPress={() => navigation.navigate("轉生")} />

        {/* <Button
        title='邦掉'
        onPress={()=> navigation.navigate('邦掉')}/> */}
    </View>
  );
}
function DetailsScreen({navigation}) {
   
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="下一頁"
        onPress={() => navigation.navigate('轉生')}/>    
        
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
//轉生
function DetailsScreen2({navigation}){
   const [name, setname] = useState("weqw");



  return(
    <View>
      <Text style={styles.story_text}>
        中美湖男神告知您已轉生至冒險誠邦，這是一個中世紀充滿冒險的時代，請告訴我你叫什麼名字
      </Text>
      <Image style={styles.img主線} source={require("./assets/IMG_0470.jpeg")}/>
      <TextInput placeholder="請告訴我你的名字"  
                  onChangeText={(val)=>setname(val)} 
                  style={{ height: 40, borderColor: 'black', borderWidth: 1 ,width:200,alignSelf:'center',marginTop:20} }
        />

      <Button 
        title="確定誒？"
        
        onPress={()=> navigation.navigate('1-1')}
      />
    
    </View>

  );
}
//1-1
function DetailsScreen3({navigation}){

  return(
    
    <View>
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
        
        <Stack.Screen name="Details" component={DetailsScreen} />  
        <Stack.Screen name="轉生" component={DetailsScreen2}/>      
        
        <Stack.Screen name="1-1" component={DetailsScreen3}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}
;

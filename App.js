import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { Text, View,Button,Image,FlatList } from 'react-native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductList from './src/productlist';
import styles from './src/style';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
import { TextInput } from 'react-native-gesture-handler';
import {Icon, Fab} from 'native-base';
import Airtable from 'airtable';
import axios from 'axios';
import Nameadd from './src/Nameadd';
import Nameedit from './src/Nameedit';




//import producut from './src/product';
//頁面的跳轉
function HomeScreen({navigation}){
  const axios_config = {     headers: {'Authorization': 'Bearer keyUEoJy6WvcWr3Sj'}    };

  const url="https://api.airtable.com/v0/appsRS67Bdr2xMOns/Table%201？maxRecords=2&view=Grid%20view  \
   -H Authorization: Bearer keyUEoJy6WvcWr3Sj";

  const [persons, setPersons] = useState([]);
  const renderItem = ({ item, index }) => (

    <View style={styles.story_text}>
    <Text style={styles.story_text}>{item.fields.Name}</Text>
    <Text style={styles.story_text}>{item.fields.Power}</Text>
    <Text style={styles.story_text}>{item.fields.Age}</Text>

    </View>

  );
  async function fetchData () {
      const result = await axios.get(url,axios_config);
      //console.log(result);
      setPersons(result.data.records);

  }
  useEffect(() => {

    fetchData();

  },[]);
  
  return (
   
    <View style={styles.container}>
           <Image style={styles.top1} source={require("./assets/title.png")}/>
      <Image style={styles.top} source={require("./assets/IMG_0446.jpeg")}/>
        <Button
         title="開始遊戲"
         onPress={() => navigation.navigate("轉生")} />

         <Button
         title='邦掉'
         onPress={()=> navigation.navigate('1-1')}/>

    <FlatList 
 
     data={persons} 
 
     renderItem = {renderItem}
 
     keyExtractor={(item, index) => ""+index}
 
     >
    </FlatList>
 
    </View>
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    // </View>
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
  const axios_config = {     headers: {'Authorization': 'Bearer keyUEoJy6WvcWr3Sj'}    };
  const url="https://api.airtable.com/v0/appsRS67Bdr2xMOns/Table%201?api_key=keyUEoJy6WvcWr3Sj";
  const [persons, setPersons] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);  
  
  // const Item = ({ index, item, onPress, style }) => (

  //   <TouchableOpacity onPress={onPress} style={[styles.item, style]}>

  //     <Text>{index}</Text>
  //     <Text>{item.fields.Name}</Text>
  //     <Text>{item.fields.Power}</Text>

  //   </TouchableOpacity>

  // );
  async function fetchData () {
    const result = await axios.get(url,axios_config);
    //console.log(result);
  setPersons(result.data.records);

}
  const renderItem = ({ item, index }) => (
    <View style={styles.story_text}>
    <Text style={styles.story_text}>{item.fields.Name}</Text>
    <Text style={styles.story_text}>{item.fields.Power}</Text>
    <Text style={styles.story_text}>{item.fields.Age}</Text>
    

    {/* <Text style={styles.story_text}>{item.fields.Notes}</Text> */}
    </View>
  );

  
  useEffect(() => {
  
    fetchData();

  },[modalVisible]);

  function update(){

    setModalVisible(false);

  }
  return(
    <View style={styles.container}>
      <FlatList 
      data={persons} 
      renderItem = {renderItem}
      keyExtractor={(item, index) => " "+index}>
      </FlatList>
      {/* <Fab onPress={()=>setModalVisible(true)}>

      <Icon ios='ios-add' android="md-aㄊdd"/>

      </Fab> */}
      <Nameadd update={update}/>
      {/* <Image style={styles.img主線} source={require("./assets/IMG_0470.jpeg")}/>
      <TextInput placeholder="請告訴我你的名字ㄑ"  
                  onChangeText={(val)=>setname(val)} 
                  style={{ height: 40, borderColor: 'black', borderWidth: 1 ,width:200,alignSelf:'center',marginTop:20} }
        />

      <Button 
        title="確定誒？"
        
        onPress={()=> navigation.navigate('1-1')}
      />
     */}

    </View>

  );
}
//1-1
function DetailsScreen3({navigation}){
  const url="https://api.airtable.com/v0/appsRS67Bdr2xMOns/Table%201?api_key=keyUEoJy6WvcWr3Sj";
  const [persons, setPersons] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const [selectedId, setSelectedId] = useState(null);

  const [person, setPerson] = useState({

      Name:"",

      Power:"",
      Age:0}
    );
    useEffect(() => {

      async function fetchData () {
  
        const result = await axios.get(get_url,axios_config);
  
        //console.log(result);
  
        setPersons(result.data.records);
      }
  
      fetchData();
  
    },[modalVisible]);
    function hide(){
      setSelectedId("");
      setModalVisible(false);
    }
    function add(){

      setPerson({
  
        Name:"",
  
        Power:"",
        Age:0
      });
  
      setSelectedId("");
  
      setModalVisible(true);
  
    }
    function update(id, index){

      setPerson({
  
        Name:persons[index].fields.Name,
  
        Power:persons[index].fields.Power,
        Age:person[index].fields.Age
  
      });
  
      setSelectedId(id);
  
      setModalVisible(true);
  
    }
    const Item = ({ index, item, onPress, style }) => (

      <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
  
        <Text>{index}</Text>
  
        <Text style={styles.story_text}>{item.fields.Name}</Text>
  
        <Text style={styles.story_text}>{item.fields.Power}</Text>
        <Text style={styles.story_text}>{item.fields.Age}</Text>
      </TouchableOpacity>
  
    );
    const renderItem = ({ item, index }) => {

      const backgroundColor = item.id === selectedId ? "#f9c2ff" : styles.item.backgroundColor;
  
      return (
  
        <Item
  
          index={index}
  
          item={item}
  
          onPress={() => update(item.id, index)}
  
          style={{ backgroundColor }}
  
        />
  
      )
  
    };
  return(
    
    <View style={styles.container}>

    <FlatList 
 
     data={persons} 
 
     renderItem = {renderItem}
 
     keyExtractor={(item, index) => ""+index}
 
     >
 
    </FlatList>
 
    <Fab onPress={()=>add()}>
 
      <Icon ios='ios-add' android="md-add"/>
 
    </Fab>
    <Text></Text>
    <Nameedit modalVisible = {modalVisible} person = {person} id={selectedId} hide={hide}/>
 
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

import React, {useState} from 'react';
import { Button , TextInput, Modal } from 'react-native';
import axios from 'axios';
import styles from './style';
import { View } from 'native-base';


export default function Nameadd(props){
    const[Name,setName]= useState(" ");
    const[Power,setPower]=useState(" ");

    const axios_config = {
        headers: {
          'Authorization': 'Bearer keyUEoJy6WvcWr3Sj',
    
          'Content-Type': 'application/json'}
      };
      const url="https://api.airtable.com/v0/appsRS67Bdr2xMOns/Table%201";

      async function sendData () {

        const newPerson={
  
          fields:{
  
            Name:Name,
  
            Power:Power
  
          }
        }
        //console.log(newPerson);
        try {
            const result = await axios.post(url,newPerson,axios_config);
            console.log(result);
            //setPersons(result.data.records);
            props.update();
        }
  
        catch (e){
  
          console.log("error:"+e);
  
        }
  
    }

    function update(){
        sendData();
    }
    return(
        <View visible={props.modalVisible}>
            <TextInput placeholder="name" value={Name} onChangeText={text=>setName(text)} style={styles.placeholder}/>
            <TextInput placeholder="power" value={Power} onChangeText={text=>setPower(text)} style={styles.placeholder}/>
        

            <Button onPress={update} title="新增"/>


        </View>
    )
}

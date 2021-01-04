import React, {useState,useEffect} from 'react';
import { Button , TextInput, Modal } from 'react-native';
import axios from 'axios';
import styles from './style';
import {axios_config, url} from './config';



export default function Nameedit(props){
  
    const[Name,setName]= useState(" ");
    const[Power,setPower]=useState(" ");
    const[Age,setAge]=useState("0");

    useEffect(()=>{
      setName(props.person.Name);
      setPower(props.person.Power);
      setAge(""+props.person.Age);


    },[props.id]);
    function update(){
      async function sendData () {


      const newPerson =props.id
      ?{records:[{
        id:props.id,
        fields:{

          Name:Name,
          Power:Power,
          Age:parseInt(Age)
        }}]
      }
      :{fields:{

        Name:Name,
        Power:Power,
        Age:parseInt(Age)
      }}
      try {

        // if id exists, call put
  
        // else call post      
  
        const result = props.id
  
          ?await axios.put(url,newPerson,axios_config)
  
          :await axios.post(url,newPerson,axios_config);
  
        props.hide();}
  
        catch (e){
  
          console.log("error:"+e);
  
        }
  
      }
  
      sendData();

      
        //console.log(newPerson);

  
    }

    
    return(
        <Modal visible={props.modalVisible}>
            <TextInput placeholder="name" value={Name} onChangeText={text=>setName(text)} style={styles.placeholder}/>
            <TextInput placeholder="power" value={Power} onChangeText={text=>setPower(text)} style={styles.placeholder}/>
            <TextInput placeholder="年齡" value={Age} onChangeText={text=>setAge(text)} style={styles.placeholder}/>



            <Button onPress={update} title="新增"/>
            <Button onPress={props.hide} title="取消"/>
        </Modal>
    );
}


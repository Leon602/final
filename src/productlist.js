import React, {useState} from 'react';

import {FlatList, View, Text, TouchableOpacity} from 'react-native';

import styles from './style';



const data =[

  {name:"iPhone 7", price:12000},

  {name:"iPhone 8", price:10000},

  {name:"iPhone X", price:20000},

]

export default function ProductList() {

  

  const [selected, setSelected] = useState(null);

  

  const renderItem = ({ item, index }) => {

    const backgroundColor = index === selected ? "#f9c2ff" : "#00ffff";

    return(  

    <TouchableOpacity onPress = {()=>setSelected(index)} style={[styles.item, {backgroundColor}]}>

      <Text style={styles.title}>{item.name}</Text>

      <Text>{item.price}</Text>

      <Text>/{index}</Text>

    </TouchableOpacity>

    )

  };
 return (

   <View style={styles.container}>

   <FlatList 

    data={data} 

    renderItem = {renderItem}

    keyExtractor={item => item.name}

    >

   </FlatList>

   </View>

 );

}
import {StatusBar, StyleSheet} from 'react-native';



const styles = StyleSheet.create({

    container: {

    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' ,
    },
    item: {

      flex: 1,

      flexDirection: 'row',

      backgroundColor: '#00ffff',

      padding: 8,

      marginVertical: 8,

      marginHorizontal: 16,

    },

    title: {
      marginTop:200,
      textAlign: 'center',
      marginVertical: 8,
    },
    buttom:{
        textAlign: 'center',
        marginVertical: 8,
    },
    top:{
      width:"90%",
      height:"30%",
      alignSelf:"center",
      marginTop:30,

    },
    top1:{
      width:"70%",
      height:"30%",
      alignSelf:"center",
      marginTop:-200,
      
    },
    //故事字體
    story_text:{
      padding:20,
      textAlign:"center",
      justifyContent:"center",
      fontSize:20,
    },
    //圖片
    img主線:{
      width:'90%',
      height:"50%",
      alignSelf:"center",
      marginTop:0,
      resizeMode:"center"
    },
    placeholder:{
      height: 40, 
      borderColor: 'black', 
      borderWidth: 1 ,
      width:200,
      alignSelf:'center',
      marginTop:20
    },
    page:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

  

  });

export default styles;
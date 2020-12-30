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

      fontSize: 24,

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
    page:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
    }

  

  });

export default styles;
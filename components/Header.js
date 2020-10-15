import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Header = ({title}) => {
  return (
    <View style={style.header}>
      <Text style={style.headerText}>{title}</Text>
    </View>
  );
}
Header.defaultProps = { title:'Header'}
const style= StyleSheet.create({
    header:{
        flex:1,
        backgroundColor:'darkslateblue',
        justifyContent:`center`,
        alignItems:`center`,
        padding:10,
        height:60,
    },
    headerText:{
        fontSize:30,
        color:'white',
        textAlign:'center',
        
    }
})

export default Header;

import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, Alert} from 'react-native';
import AddItem from './components/AddItem.js';
import Header from './components/Header.js';
import ListItem from './components/ListItem.js';

const App = () => {
 const newId = new Date().getUTCMilliseconds()
  const [items, setItems] = useState([
    {id: '123', text: 'Eggs'},
    {id: '12', text: 'Milk'},
    {id: '1234', text: 'Peperony'},
    {id: '12345', text: 'Chicken'},
  ]);
  const deleteItem = (id) =>{
    setItems(prevItem =>{
      return prevItem.filter(item => item.id !== id)
    });
  }
  const addItem = (text)=>{
    if(!text){Alert.alert('Error','Please Enter An Item',{text:'Ok'})}
    else{
    setItems(prevItem=>{
      return [{id:newId,text},...prevItem]
    })}
  }
  return (
    <View style={style.container}>
    <Header title="Shopping List"></Header>
    <AddItem addItem={addItem}></AddItem>
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;

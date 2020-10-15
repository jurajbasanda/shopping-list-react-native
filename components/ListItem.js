import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item,deleteItem}) => {
  return (
    <TouchableOpacity style={style.listItem}>
      <View style={style.listItemView}>
        <Text>{item.text}</Text>
        <Icon name="remove" size={20} color="#911" onPress={()=> deleteItem(item.id)}/>
      </View>
    </TouchableOpacity>
  );
};
ListItem.defaultProps = {
  item: 'item',
};
const style = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#5555',
    borderBottomWidth: 0.5,
    borderColor: '#656',
  },
  listItemView: {flexDirection: 'row', justifyContent: 'space-between'},
});
export default ListItem;

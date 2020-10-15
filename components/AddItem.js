import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const onChange = textValue => setText(textValue);
  return (
    <View>
      <TextInput
        style={style.input}
        placeholder="Enter Item..."
        onChangeText={onChange}
      />
      <TouchableOpacity style={style.btn} onPress={()=>addItem(text)}>
        <Text style={style.btnText}>
          <Icon
            name="plus"
            size={20}
            color="#090"
          />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  input: {height: 60, color: 'black', fontSize: 18, padding: 15},
  btn: {padding: 9, margin: 5, backgroundColor: '#5555'},
  btnText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;

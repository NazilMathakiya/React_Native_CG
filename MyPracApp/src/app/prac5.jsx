import { useState } from "react";
import { View, Text, Pressable, TextInput, StyleSheet, FlatList } from "react-native";
export default function Prac() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    pass: ""
  });

  const [data, setData] = useState([]);
 

  const handlePress = () => {

    setData([...data, obj])
    setName("")
    setEmail("")
    setPass("")
  };


  return (
    <View style={styles.viewstyle}>
      <TextInput
        value={input.name}
        onChangeText={setInput.name}
        placeholder="Enter Name:"
        style={styles.txtinputstyle}
      />
      <TextInput
        value={input.email}
        onChangeText={setInput.email}
        placeholder="Enter email:"
        style={styles.txtinputstyle}
      />
      <TextInput
        value={input.pass}
        onChangeText={setInput.pass}
        placeholder="Enter pass:"
        style={styles.txtinputstyle}
      />

      <Pressable onPress={handlePress} style={styles.btnstyle}>
        <Text>Click here!</Text>
      </Pressable>


      <FlatList data={data}
      keyExtractor={(ele)=>ele.id}

      renderItem={({item})=>(
        <View>
          <Text>{item.input.name}</Text>
          <Text>{item.input.email}</Text>
          <Text>{item.input.pass}</Text>
        </View>
      )}
      />
  
    </View>
  );
}

const styles = StyleSheet.create({
  viewstyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
    marginTop:50
  },
  textstyle: {
    textAlign: "center",
    flex: 1,
    fontSize: 40,
  },
  btnstyle: {
    backgroundColor: "blue",
    borderWidth: 5,
    borderColor: "black",
  },
  txtinputstyle: {
    backgroundColor: "white",
    borderWidth:2
  },
});

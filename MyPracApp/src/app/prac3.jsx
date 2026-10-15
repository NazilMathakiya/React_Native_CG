import { useState } from "react";
import { View, Text, Pressable, TextInput, StyleSheet, FlatList } from "react-native";
export default function Prac() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [data, setData] = useState([]);
 

  const handlePress = () => {

    const obj={
        name: name,
        email: email,
        pass: pass
    }

    setData([...data, obj])
    setName("")
    setEmail("")
    setPass("")
  };


  return (
    <View style={styles.viewstyle}>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter Name:"
        style={styles.txtinputstyle}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email:"
        style={styles.txtinputstyle}
      />
      <TextInput
        value={pass}
        onChangeText={setPass}
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
          <Text>{item.name}</Text>
          <Text>{item.email}</Text>
          <Text>{item.pass}</Text>
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

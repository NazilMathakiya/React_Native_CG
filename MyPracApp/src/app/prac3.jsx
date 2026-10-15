import { useState } from "react";
import { StyleSheet, TextInput, View, Text, Pressable } from "react-native";

export default function Prac() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  const [email, setEmail] = useState("");
  const [edata, setEData] = useState("");

  const [pass, setPass] = useState("");
  const [pdata, setPData] = useState("");

  const handleData = () => {
    setData(name);
    setEData(email);
    setPData(pass);
  };

  return (
    <View style={styles.viewstyle}> 
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter data:"
        style={styles.inputstyle}
      />

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter data:"
        style={styles.inputstyle}
      />

      <TextInput
        value={pass}
        onChangeText={setPass}
        placeholder="Enter data:"
        style={styles.inputstyle}
      />



      <Pressable onPress={handleData} style={styles.pressstyle}>
        <Text style={styles.buttonText}>Click here</Text>
      </Pressable>

      <Text style={styles.textstyle}>{data}</Text>
      <Text style={styles.textstyle}>{edata}</Text>
      <Text style={styles.textstyle}>{pdata}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  viewstyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    padding: 20,
  },
  inputstyle: {
    backgroundColor: "white",
    width: "100%",
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
  },
  pressstyle: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  textstyle: {
    textAlign: "center",
    // marginTop: 30,
    fontSize: 40,
    color: "white",
  },
});

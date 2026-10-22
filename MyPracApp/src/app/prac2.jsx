import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

export default function Practice() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  const handleData = () => {
    setData(name);
  };

  return (
    <View
      style={{
        backgroundColor: "red",
        justifyContent: "center",
        flex: 1
      }}
    >
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="enter data"
        style={{ fontSize: 40 }}
      />
      <Button title="Click" onPress={handleData} />
      <Text style={{ fontSize: 40 }}>{data}</Text>
    </View>
  );
}

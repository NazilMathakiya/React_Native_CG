import { FlatList, Text, View } from "react-native";

const arr = ["a", "b", "c"];

export default function Prac() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
      }}
    > 
      <Text>Nazil</Text>

      <FlatList
        data={arr}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
}

import { FlatList, Text, View } from "react-native";
import CounterPrac from "./CounterPrac";
const fruit = ["apple", "banana", "mango"];
export default function Demo() {
  return (
    <View
      style={{
        backgroundColor: "black",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          color: "white",
        }}
      >
        Nazil
      </Text>

      <FlatList
        data={fruit}
        keyExtractor={(ele) => ele.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
}

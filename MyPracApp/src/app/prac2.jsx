import { FlatList, Text, View } from "react-native";

const arr = [
  { id: 1, name: "Nazil" },
  { id: 2, name: "Arman" },
];
export default function pract() {
  return (
    <View
      style={{
        alignContent: "center",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        Hellooo! Nazil
      </Text>

      <FlatList
        data={arr}
        keyExtractor={(ele) => ele.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

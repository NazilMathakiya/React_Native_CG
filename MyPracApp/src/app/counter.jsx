import { View, Text, Pressable } from "react-native";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const incr = () => {
    setCount((previous) => previous + 1);
  };

  const decr = () => {
    setCount((previous) => Math.max(0, previous - 1));
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
      }}
    >
      <Pressable
        onPress={decr}
        style={{
          width: 40,
          height: 40,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 24 }}>-</Text>
      </Pressable>

      <Text
        style={{
          fontSize: 22,
          color: "black",
          minWidth: 30,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {count}
      </Text>

      <Pressable
        onPress={incr}
        style={{
          width: 40,
          height: 40,
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 24 }}>+</Text>
      </Pressable>
    </View>
  );
}
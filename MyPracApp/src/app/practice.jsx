import { useState } from "react";
import { View, Text, Button, Pressable, TouchableOpacity } from "react-native";

export default function Practice() {
  const [count, setCount] = useState(0);
  const [isPressing, setIsPressing] = useState(false);
  const [message, setMessage] = useState("Ready");

  const incr = () => {
    setCount((previous) => Math.min(10, previous + 1));
    setMessage("Counter increased!");
  };

  const reset = () => {
    setCount(0);
    setMessage("Counter reset!");
  };

  const decr = () => {
    setCount((previous) => Math.max(0, previous - 1));
    setMessage("Counter decreased!");
  };

  const handleLongPress = () => {
    setMessage("Long press detected!");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
        gap: 15,
        backgroundColor: "darkgreen",
      }}
    >
      <Text
        style={{
          fontSize: 50,
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
        }}
      >
        Count: {count}
      </Text>

      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 16,
        }}
      >
        {isPressing ? "Button is pressed..." : message}
      </Text>

      {/* PRESSABLE */}
      <Pressable
        onPress={incr}
        onPressIn={() => setIsPressing(true)}
        onPressOut={() => setIsPressing(false)}
        onLongPress={handleLongPress}
        delayLongPress={700}
        disabled={count >= 10}
        hitSlop={10}
        pressRetentionOffset={{
          top: 20,
          bottom: 20,
          left: 20,
          right: 20,
        }}
        android_ripple={{
          color: "#ffaaaa",
          borderless: false,
        }}
        style={({ pressed }) => ({
          height: 55,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:
            count >= 10 ? "gray" : pressed ? "#a00000" : "#fc1414",
          borderWidth: 2,
          borderColor: "#80fc14",
          borderRadius: 88,
          opacity: pressed ? 0.85 : 1,
        })}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {count >= 10 ? "Maximum Reached" : "+1 with Pressable"}
        </Text>
      </Pressable>

      {/* BUTTON */}
      <Button title="Reset Counter ➡️" onPress={reset} color="pink"/>

      {/* TOUCHABLE OPACITY */}
      <TouchableOpacity
        onPress={decr}
        onPressIn={() => setIsPressing(true)}
        onPressOut={() => setIsPressing(false)}
        onLongPress={handleLongPress}
        delayLongPress={700}
        disabled={count === 0}
        hitSlop={10}
        pressRetentionOffset={{
          top: 20,
          bottom: 20,
          left: 20,
          right: 20,
        }}
        activeOpacity={0.5}
        style={{
          height: 55,
          backgroundColor: count === 0 ? "gray" : "#80510c",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          borderRadius: 88,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          -1 with Touchable
        </Text>
      </TouchableOpacity>
    </View>
  );
}

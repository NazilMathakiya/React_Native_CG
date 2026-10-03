import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CounterPrac = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => Math.max(0, prev - 1));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>

      <Text style={styles.count}>Count: {count}</Text>

      <View style={styles.button}>
        <Button
          title="Increment"
          onPress={handleIncrement}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Decrement"
          onPress={handleDecrement}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Reset"
          onPress={handleReset}
        />
      </View>
    </View>
  );
};

export default CounterPrac;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },

  count: {
    fontSize: 25,
    marginBottom: 30,
  },

  button: {
    width: 200,
    marginVertical: 5,
  },
});
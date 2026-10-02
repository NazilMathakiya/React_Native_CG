import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <View>
      <Text>Count: {count}</Text>

      <Button title="Increment" onPress={handleIncrement} />
      <Button title="Decrement" onPress={handleDecrement} />
      <Button title="Reset" onPress={handleReset} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
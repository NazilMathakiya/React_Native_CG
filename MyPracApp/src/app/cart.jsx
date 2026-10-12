
import { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { cartItems, subscribeCart } from "./products";

export default function Cart() {
  const [items, setItems] = useState(cartItems);

  useEffect(() => {
    return subscribeCart(setItems);
  }, []);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#f2f2f2",
        }}
      />
    );
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#f2f2f2",
      }}
      contentContainerStyle={{ padding: 15 }}
    >
      {items.map((item) => (
        <View
          key={item.id}
          style={{
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#ddd",
            padding: 10,
            marginBottom: 10,
          }}
        >
          <Text style={{ color: "black", fontSize: 18 }}>
            {item.name}
          </Text>

          <Text style={{ color: "black" }}>
            Price: ₹{item.price}
          </Text>

          <Text style={{ color: "black" }}>
            Quantity: {item.quantity}
          </Text>

          <Text style={{ color: "black" }}>
            Subtotal: ₹{item.price * item.quantity}
          </Text>
        </View>
      ))}

      <Text
        style={{
          color: "black",
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 5,
        }}
      >
        Total: ₹{total}
      </Text>
    </ScrollView>
  );
}






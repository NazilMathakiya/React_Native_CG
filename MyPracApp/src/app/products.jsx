import { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { router } from "expo-router";

export let cartItems = [];

let listeners = [];

export function updateCart(items) {
  cartItems = items;
  listeners.forEach((fn) => fn(items));
}

export function subscribeCart(fn) {
  listeners.push(fn);

  return () => {
    listeners = listeners.filter((item) => item !== fn);
  };
}

const products = [
  { id: 1, name: "T-Shirt", price: 499 },
  { id: 2, name: "Shoes", price: 999 },
  { id: 3, name: "Watch", price: 1499 },
];

export default function Products() {
  const [qty, setQty] = useState({});

  const changeQty = (id, value) => {
    setQty((prev) => {
      const newQty = Math.max(0, (prev[id] || 0) + value);

      const updatedQty = {
        ...prev,
        [id]: newQty,
      };

      const updatedCart = cartItems
        .map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
        .filter((item) => item.quantity > 0);

      updateCart(updatedCart);

      return updatedQty;
    });
  };

  const addToCart = (product) => {
    const quantity = qty[product.id] || 0;

    if (quantity === 0) return;

    const old = cartItems.find((item) => item.id === product.id);

    if (old) {
      updateCart(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity } : item,
        ),
      );
    } else {
      updateCart([...cartItems, { ...product, quantity }]);
    }
  };

  const count = Object.values(qty).reduce((total, value) => total + value, 0);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 15,
      }}
    >
      <Pressable
        onPress={() => router.push("/cart")}
        style={{
          alignSelf: "flex-end",
          padding: 8,
          borderWidth: 1,
          backgroundColor: "white",
        }}
      >
        <Text style={{ color: "black" }}>Cart ({count})</Text>
      </Pressable>

      <ScrollView>
        {products.map((item) => (
          <View
            key={item.id}
            style={{
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "white",
              padding: 12,
              marginTop: 12,
            }}
          >
            <Text style={{ color: "black", fontSize: 18 }}>{item.name}</Text>

            <Text style={{ color: "black" }}>Price: ₹{item.price}</Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
                marginVertical: 8,
              }}
            >
              <Pressable onPress={() => changeQty(item.id, -1)}>
                <Text style={{ color: "black", fontSize: 22 }}>-</Text>
              </Pressable>

              <Text style={{ color: "black" }}>{qty[item.id] || 0}</Text>

              <Pressable onPress={() => changeQty(item.id, 1)}>
                <Text style={{ color: "black", fontSize: 22 }}>+</Text>
              </Pressable>
            </View>

            <Pressable
              onPress={() => addToCart(item)}
              style={{
                backgroundColor: "black",
                padding: 8,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                }}
              >
                Add to Cart
              </Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

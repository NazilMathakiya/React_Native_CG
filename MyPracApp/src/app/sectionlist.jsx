import React from "react";
import {View, Text, SectionList, StyleSheet} from "react-native";

const products = [
  {
    title: "Electronics",
    data: [
      { id: "1", name: "Laptop", price: 55000 },
      { id: "2", name: "Mobile Phone", price: 20000 },
      { id: "3", name: "Headphones", price: 1500 },
    ],
  },
  {
    title: "Clothing",
    data: [
      { id: "4", name: "T-Shirt", price: 499 },
      { id: "5", name: "Jeans", price: 999 },
      { id: "6", name: "Jacket", price: 1999 },
    ],
  },
  {
    title: "Accessories",
    data: [
      { id: "7", name: "Watch", price: 2500 },
      { id: "8", name: "Sunglasses", price: 799 },
    ],
  },
];

export default function SectionListExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Products</Text>

      <SectionList
        sections={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Text style={styles.productName}>
              {item.name}
            </Text>

            <Text style={styles.price}>
              Price: ₹{item.price}
            </Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {section.title}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>
            No products available.
          </Text>
        )}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 15,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginBottom: 15,
  },

  listContent: {
    paddingBottom: 20,
  },

  sectionHeader: {
    backgroundColor: "#333333",
    padding: 12,
    marginTop: 12,
    borderRadius: 6,
  },

  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  productCard: {
    backgroundColor: "white",
    padding: 15,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 6,
  },

  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },

  price: {
    fontSize: 14,
    color: "#555555",
    marginTop: 5,
  },

  separator: {
    height: 8,
  },

  emptyText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});

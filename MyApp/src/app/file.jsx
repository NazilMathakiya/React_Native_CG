import { View, Text, Button } from "react-native";
import { Paths } from "expo-file-system";

export default function FileSystem() {
  const handleFileSystem = () => {
    console.log(Paths.document);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "teal",
      }}
    >
      <Text>React Native Expo File System Class</Text>
      <Button title="Get Path" onPress={handleFileSystem} />
    </View>
  );
}
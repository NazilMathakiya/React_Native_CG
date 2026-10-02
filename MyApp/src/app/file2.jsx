import { View, Text, Button } from "react-native";
import { Paths, File } from "expo-file-system";

export default function FileSystem() {
  const handleFileData = async () => {
    const files = new File(Paths.document, "notes.txt");

    if (!files.exists) {
      files.create();
    }

    files.write("Hello from native class");

    const res = await files.text();

    console.log(res);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "gray",
      }}
    >
      <Text>React Native Class</Text>

      <Button title="Get File Data" onPress={handleFileData} />
    </View>
  );
}


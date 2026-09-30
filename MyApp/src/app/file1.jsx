import { View, Text, Button } from "react-native";
import { Paths, File, Directory } from "expo-file-system";

export default function FileSystem() {
  const handleFileSystem = () => {
    console.log(Paths.document);

    const imageDir = new Directory(Paths.document, "images");

    console.log(imageDir);

    if (!imageDir.exists) {
      imageDir.create(); 
    }

    const thumbnail = new File(imageDir, "images");

    console.log(thumbnail.uri);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", backgroundColor: "red" }}>
      <Text>React Native class</Text>
      <Button title="Get File Path" onPress={handleFileSystem} />
    </View>
  );
}


import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { File, Paths } from "expo-file-system";

export default function DownloadScreen() {
  const [progress, setProgress] = useState(0);

  const downloadPDF = async () => {
    try {
      const url = "https://some-domain.com/resume.pdf";

      const destination = new File(Paths.cache, "resume.pdf");

      const file = await File.downloadFileAsync(url, destination, {
        idempotent: true,

        onProgress: ({ bytesWritten, totalBytes }) => {
          if (totalBytes > 0) {
            const res = (bytesWritten / totalBytes) * 100;
            setProgress(res);
          }
        },
      });

      console.log("PDF downloaded successfully!");
      console.log("File:", file.uri);

      setProgress(100);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PDF Downloader</Text>

      <Button
        title="Download Resume"
        onPress={downloadPDF}
      />

      <Text style={styles.progress}>
        {Math.round(progress)}%
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "red",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  progress: {
    fontSize: 15,
    marginTop: 30,
  },
});
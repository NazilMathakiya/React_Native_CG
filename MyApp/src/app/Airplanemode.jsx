
import { useState } from "react";

import { View, Text, Button } from "react-native";

import * as Network from "expo-network";

export default function App() {

  const [enabled, setEnabled] = useState(null);

  const check = async () => {

    const result =

      await Network.isAirplaneModeEnabledAsync();

    setEnabled(result);

  };

  return (

    <View>

      <Button

        title="Check Airplane Mode"

        onPress={check}

      />

      <Text>

        Airplane Mode:

        {enabled === null

          ? "Unknown"

          : String(enabled)}

      </Text>

    </View>

  );

}

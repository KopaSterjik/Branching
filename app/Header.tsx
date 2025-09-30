import { Button, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        backgroundColor: "red",
        width: "50%",
      }}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <View style={{ backgroundColor: "blue", borderRadius: 25 }}>
        <Button
          title="Hello"
          onPress={() => {
            <Text>Hello</Text>;
          }}></Button>
      </View>
    </View>
  );
}

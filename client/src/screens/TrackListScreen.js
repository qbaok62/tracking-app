import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TrackListScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Track List</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;

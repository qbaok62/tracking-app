import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Track List</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;

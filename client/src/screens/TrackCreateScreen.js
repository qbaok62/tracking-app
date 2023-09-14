import * as Location from "expo-location";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
// import "../_mockLocation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/locationContext";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err, setErr] = React.useState(null);

  const startWatching = async () => {
    const props = await Location.requestForegroundPermissionsAsync();
    if (props.status !== "granted") {
      setErr("Permission to access location was denied");
      return;
    }
    await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 20,
      },
      (location) => {
        addLocation(location);
      }
    );
  };

  React.useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView>
      <Text h3>Create a Track</Text>
      <Map />
      {err && <Text>Please enable location servies</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;

import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: -1,
      accuracy: 9.918803373121984,
      altitudeAccuracy: 1.720611364967026,
      altitude: 13.657246648333967,
      longtitude: 105.7975756051028 + increment * tenMetersWithDegrees,
      latitude: 20.977699613901304 + increment * tenMetersWithDegrees,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
}, 1000);

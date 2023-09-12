import React from "react";
import { StyleSheet, Text } from "react-native";
import { Context as AuthContext } from "../context/authContext";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { signout } = React.useContext(AuthContext);
  return (
    <>
      <Text>Account Screen</Text>
      <Spacer>
        <Button title="Sign out" onPress={signout} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;

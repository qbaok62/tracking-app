import { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import AuthFrom from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", clearErrorMessage);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthFrom
        headerText="Sign Up for Tracker"
        submitButtonText="Sign Up"
        errorMessage={state.errorMessage}
        onSubmit={signup}
      />
      <NavLink
        text="Already have an account? Sign in instead"
        routeName="Signin"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SignupScreen;

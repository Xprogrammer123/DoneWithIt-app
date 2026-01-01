import { StyleSheet, ImageBackground, View } from "react-native";


function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/tote-bag.webp")}
      style={styles.background}
    >
            <View style={styles.loginButton}></View>
            <View style={styles.regiterButton}></View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
  },
  loginButton: {
    width: "100%",
    height: 50,
  },
 regiterButton: {
    width: "300%",
    height: 30,
  },
})1

export default WelcomeScreen;
 
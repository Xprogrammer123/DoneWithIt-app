import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
  View
} from "react-native";


export default function App() {
console.log(Dimensions.get("screen"));


  return (
    <SafeAreaView style={styles.container}>
    <View style={{
      backgroundColor:"blue",
      height:"30%",
      width:"100%",
    }}
    ></View>
    </SafeAreaView>
  );
}
const containerStyle = {backgroundColor:"orange"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

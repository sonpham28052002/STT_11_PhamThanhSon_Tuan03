import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2, justifyContent: "flex-end" }}>
        <View
          style={{
            height: "140px",
            width: "140px",
            borderColor: "black",
            borderWidth: 15,
            borderRadius: "50%",
          }}
        ></View>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
          GROW
        </Text>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
          YOUR BUSINESS
        </Text>
      </View>
      <View style={{ flex: 2, marginHorizontal: "25px" }}>
        <View style={{ flex: 1 }}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            We will help you to grow your business using online server
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: "25px",
            backgroundColor: "react",
          }}
        >
          <TouchableOpacity
            style={{
              height: 48,
              width: 119,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E3C000",
              borderRadius: 10,
            }}>
            <Text style={{fontWeight:"bold"}}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 48,
              width: 119,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E3C000",
              borderRadius: 10,
            }}>
            <Text style={{fontWeight:"bold"}}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00CCF9",
  },
});

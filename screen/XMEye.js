import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

export default function XMEye() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 30,
        }}
      >
        <Image
          source={require("../assets/xmeye.jpg")}
          style={{ width: 150, height: 150 }}
        />
      </View>

      <View style={{ flex: 2 }}>
        <TextInput
          left={<TextInput.Icon icon="account" size={36} color={"black"} />}
          placeholder="Please input password"
          style={{
            backgroundColor: "white",
            height: 48,
            marginBottom: 40,
            borderbottomcolor: "gray",
            borderBottomWidth: 1,
          }}
          underlineColor="none"
          activeUnderlineColor="none"
        />
        <TextInput
          left={<TextInput.Icon icon="lock" size={36} color={"black"} />}
          placeholder="Please input password"
          style={{
            backgroundColor: "white",
            height: 48,
            marginBottom: 40,
            borderbottomcolor: "gray",
            borderBottomWidth: 1,
          }}
          underlineColor="none"
          activeUnderlineColor="none"
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#386FFC",
            height: 48,
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
              fontWeight: "500",
            }}
          >
            Register
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
              fontWeight: "500",
            }}
          >
            Forget password?
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              marginTop: 30,
              fontWeight: "500",
              textDecorationStyle: "solid",
              textDecorationColor: "blue",
            }}
          >
            -------------- Other login methods --------------
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: 30,
        }}
      >
        <View
          style={{
            height: 74,
            width: 74,
            backgroundColor: "#3AB4FF",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <FontAwesome5 name="user-plus" size={45} color="white" />
        </View>
        <View
          style={{
            height: 74,
            width: 74,
            backgroundColor: "#F4AA47",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <FontAwesome5 name="wifi" size={45} color="white" />
        </View>
        <View
          style={{
            height: 74,
            width: 74,
            backgroundColor: "#3A579C",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <FontAwesome5 name="facebook-f" size={45} color="white" />
        </View>
      </View>
    </View>
  );
}

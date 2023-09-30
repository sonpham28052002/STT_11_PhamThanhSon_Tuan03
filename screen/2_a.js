import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import {} from "@expo/vector-icons";

export default function two_a() {
  return (
    <View
      style={{
        flex: 1,
        backgroundImage: "linear-gradient(to bottom,#FBCB00, #BF9A00",
        paddingHorizontal: 20,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", marginLeft: 30 }}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>LOGIN</Text>
      </View>
      <View style={{ flex: 2, alignItems: "center" }}>
        <TextInput
          left={<TextInput.Icon icon="account" size={36} color="black" />}
          style={{
            height: 54,
            width: 370,
            backgroundColor: "#FBCB00",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "white",
            marginBottom: 20,
            fontSize: 20,
          }}
          activeUnderlineColor="none"
          underlineColor="none"
          placeholder="Name"
        />
        <TextInput
          left={<TextInput.Icon icon="lock" size={36} color="black" />}
          right={<TextInput.Icon icon="eye" size={36} color="black" />}
          style={{
            height: 54,
            width: 370,
            backgroundColor: "#FBCB00",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "white",
            marginBottom: 20,
            fontSize: 20,
          }}
          activeUnderlineColor="none"
          underlineColor="none"
          placeholder="Password"
        />
        <TouchableOpacity
          style={{
            marginTop: 40,
            backgroundColor: "black",
            height: 48,
            width: 370,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              textAlign: "center",
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
        <Text style={{
            marginTop:30,
            fontWeight:"bold",
            fontSize:20
        }}>CREATE ACCOUNT</Text>
      </View>
    </View>
  );
}

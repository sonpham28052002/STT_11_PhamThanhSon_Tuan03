import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

export default function one_b() {
  return (
    <View
      style={{
        flex: 1,
        backgroundImage:
          "linear-gradient(to bottom, #fff,#D1F4F6,#E5F4F5, #00CCF9",
      }}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <MaterialIcons name="lock" size={200} color="black" />
      </View>
      <View style={{ alignItems: "center", height: "150px" }}>
        <View style={{ flex: 1, justifyContent: "center", width: "40%" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              textAlign: "center",
            }}
          >
            FORGET PASSWORD
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            width: "310px",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Provide your account’s email for which you want to reset your
            password
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          marginHorizontal: "10px",
          marginTop: "30px",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "80%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Email"
            style={{
              backgroundColor: "#C4C4C4",
              height: "48px",
              width: "100%",
              borderRadius: "5px",
            }}
            underlineColor="#C4C4C4"
            activeUnderlineColor="#C4C4C4"
            contentStyle={{ height: "48px" }}
            left={
              <TextInput.Icon
                color="black"
                icon="email"
                style={{ marginTop:"20px" }}
              />
            }
          />
        </View>
        <View
          style={{
            marginTop: "40px",
            width: "80%",
            height:"45px"
          }}
        >
          <TouchableOpacity style={{
            backgroundColor:"#E3C000",
            height:"45px",
            width:"100%",
            alignItems:"center",
            justifyContent:"center",
          }}>
            <Text style={{textAlign:"center",fontWeight:"bold", fontSize:"20px"}}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

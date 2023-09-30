import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

export default function one_a() {
  return (
    <View
      style={{
        flex: 1,
        backgroundImage:
          "linear-gradient(to bottom, #fff,#D1F4F6,#E5F4F5, #00CCF9",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: "25px",

          }}
        >
          <TouchableOpacity
            style={{
              height: 48,
              width: 119,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E3C000",
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
            }}>
            <Text style={{fontWeight:"bold"}}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:3}}>
            <Text style={{textAlign:"center" , fontWeight:"bold",fontSize:15}}>
                HOW We WORK?
            </Text>
        </View>
      </View>
    </View>
  );
}

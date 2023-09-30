import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default function one_c() {
  return (
    <View
      style={{
        flex: 1,
        backgroundImage:
          "linear-gradient(to bottom, #fff,#D1F4F6,#E5F4F5, #00CCF9",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 60, fontWeight: "bold" }}>CODE</Text>
      </View>
      <View
        style={{ justifyContent: "space-between", width: "54%", height: 150 }}
      >
        <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 20 }}>
          VERIFICATION
        </Text>
        <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 15 }}>
          Enter ontime password sent on ++849092605798
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "column",alignItems:"center",width:"90%", marginTop: 50 }}>
        <View style={{flexDirection:"row"}}>
        <TextInput
          style={{
            height: 50,
            width: 50,
            borderWidth: 2,
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
            
          }}
        />
        <TextInput
          style={{
            height: 50,
            width: 50,
            borderWidth: 2,
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
          }}
        />
        <TextInput
          style={{
            height: 50,
            width: 50,
            borderWidth: 2,
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
          }}
        />
        <TextInput
          style={{
            height: 50,
            width: 50,
            borderWidth: 2,
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
          }}
        />
        <TextInput
          style={{
            height: 50,
            width: 50,
            borderWidth: 2,
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
          }}
        />
        <TextInput
          style={{
            height: 50,
            width: 50,
            borderWidth: 2,
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
          }}
        />
        </View>
        <TouchableOpacity style={{ height: 48,width:"100%", marginTop:50,backgroundColor: "#E3C000",justifyContent:"center"}}>
          <Text
            style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}
          >
            VERIFY CODE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

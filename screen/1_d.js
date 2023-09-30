import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { Entypo ,FontAwesome} from "@expo/vector-icons";

export default function one_d() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#31AA5230",
        paddingHorizontal: "20px",
      }}
    >
      <View style={{ flex: 0.5, justifyContent: "center" }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "bold",
            color: "black",
          }}
        >
          LOGIN
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <TextInput
          placeholder="Email"
          style={{
            backgroundColor: "#C4C4C4",
            height: "54px",
            width: "100%",
            borderRadius: "5px",
          }}
          underlineColor="#C4C4C4"
          activeUnderlineColor="#C4C4C4"
          contentStyle={{ height: "54px" }}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{
            backgroundColor: "#C4C4C4",
            height: "54px",
            width: "100%",
            borderRadius: "5px",
          }}
          underlineColor="#C4C4C4"
          activeUnderlineColor="#C4C4C4"
          contentStyle={{ height: "54px" }}
          right={
            <TextInput.Icon
              color="black"
              icon="eye"
              size="36px"
              style={{ marginTop: "30px" }}
            />
          }
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#E53935",
            height: 45,
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, width:"100%",alignItems: "center" }}>
        <Text style={{ fontWeight:"bold",marginBottom:10}}>When you agree to terms and conditions</Text>
        <Text style={{fontWeight:"bold", marginBottom:10, color:"#5D25FA"}}>For got your password?</Text>
        <Text style={{fontWeight:"bold", marginBottom:10}}>Or login with</Text>

         <View style={{ height:"50px",width:"100%", marginTop:20, flexDirection:"row", borderWidth:1, borderColor:"#0680F1" }}>
        <View style={{flex:1, alignItems:"center",justifyContent:"center",backgroundColor:"#25479B"}}>
          <Entypo name="facebook" size={40} color="#fff" />
        </View>
        <View style={{flex:1, alignItems:"center",justifyContent:"center",backgroundColor:"#0F8EE0"}}>
          <Text style={{fontWeight:"bold",fontSize:40, color:"#fff"}}>Z</Text>
        </View>
        <View style={{flex:1, alignItems:"center",justifyContent:"center",backgroundColor:""}}>
          <FontAwesome name="google" size={40} color="black" />
        </View>
      </View>
      </View>
     
    </View>
  );
}

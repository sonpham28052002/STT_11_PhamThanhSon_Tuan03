import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Checkbox, TextInput } from "react-native-paper";

export default function one_e() {
  const [checked, setChecked] = React.useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#31AA5230",
        justifyContent: "center",
      }}
    >
      <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>REGISTER</Text>
      </View>
      <View
        style={{
          flex: 7,
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 5,
        }}
      >
        <TextInput
          style={{
            height: "54px",
            width: "370px",
            backgroundColor: "#C4C4C4",
            borderRadius: 5,
            marginBottom: 20,
          }}
          contentStyle={{ height: "54px" }}
          activeUnderlineColor="none"
          underlineColor="none"
          placeholder="Name"
        />
        <TextInput
          style={{
            height: "54px",
            width: "370px",
            backgroundColor: "#C4C4C4",
            borderRadius: 5,
            marginBottom: 20,
          }}
          contentStyle={{ height: "54px" }}
          activeUnderlineColor="none"
          underlineColor="none"
          placeholder="Phone"
        />
        <TextInput
          style={{
            height: "54px",
            width: "370px",
            backgroundColor: "#C4C4C4",
            borderRadius: 5,
            marginBottom: 20,
          }}
          contentStyle={{ height: "54px" }}
          activeUnderlineColor="none"
          underlineColor="none"
          placeholder="Email"
        />
        <TextInput
          style={{
            height: "54px",
            width: "370px",
            backgroundColor: "#C4C4C4",
            borderRadius: 5,
            marginBottom: 20,
          }}
          contentStyle={{ height: "54px" }}
          activeUnderlineColor="none"
          underlineColor="none"
          placeholder="Password"
          secureTextEntry={true}
          right={
            <TextInput.Icon icon="eye" size={36} style={{ marginTop: 30 }} />
          }
        />
        <TextInput
          style={{
            height: "54px",
            width: "370px",
            backgroundColor: "#C4C4C4",
            borderRadius: 5,
            marginBottom: 20,
          }}
          contentStyle={{ height: "54px" }}
          activeUnderlineColor="none"
          underlineColor="none"
          placeholder="Name"
        />
        <View style={{ width: "80%", flexDirection:"row"}}>
          <View
            style={{
              height: "50px",
              width: "100px",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox
              style={{ height: "50px", width: "50px", borderRadius: 50 }}
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={{fontSize:18}}>Male</Text>
          </View>
          <View
            style={{
              height: "50px",
              width: "100px",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox
              style={{ height: "50px", width: "50px", borderRadius: 50 }}
              status={checked ? "unchecked" : "checked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={{fontSize:18}}>Female</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#E53935",
            height: 45,
            justifyContent: "center",
            marginTop: 10,
            width: "370px",
            borderRadius: 5,
          }}>
            <Text
                style={{
                textAlign: "center",
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                }}>REGISTER</Text>
          </TouchableOpacity>
          <Text style={{marginTop:10, fontWeight:"500"}}>When you agree to terms and conditions</Text>
      </View>
      
    </View>
  );
}

import React from "react";
import { View, Text, Image } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

function Info() {
  return (
    <View  style={{position: "absolute", bottom: 0}}>
      <Text>Infopage</Text>
      <SharedElement id={"1"}>
        <Image
          source={require("../images/img1.jpg")}
          style={{
            width: "100%",
            height: 20,
          }}
          resizeMode="cover"
        />
      </SharedElement>
    </View>
  );
}

Info.sharedElements = (route: any) => {
    console.log("route", route);
  return [
    {
      id: `1`,
      animation: "move",
      resize: "clip",
    },
  ];
};

export default Info;

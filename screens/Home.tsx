import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

interface homeProps {
  navigation: any;
}

export default function Home({ navigation }: homeProps) {
  return (
    <View>
      <Text>Homepage</Text>
      <Pressable onPress={() => navigation.navigate('Info')}>
        <SharedElement id={"1"}>
          <Image
            source={require("../images/img1.jpg")}
            style={{
              width: "80%",
              height: 200,
            }}
            resizeMode="cover"
          />
        </SharedElement>
      </Pressable>
    </View>
  );
}

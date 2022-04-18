import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
//we are getting route and navigation as we are using details as screeen
const Details = ({route,navigation}) => {
  const { data } = route.params; //phle console log route karke dekh useme params milega usee hmare pas object ayega jisse
  //hum apni nft ki details le sakte hai
  return (
   <SafeAreaView style={{ flex:1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
   </SafeAreaView>

  )
}

export default Details
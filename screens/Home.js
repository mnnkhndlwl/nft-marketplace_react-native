import {Text,View,SafeAreaView,FlatList } from 'react-native';
import { useState } from 'react';
import { COLORS, FONTS, SIZES, assets,NFTData } from "../constants";
import { NFTCard,HomeHeader,FocusedStatusBar } from '../components';

const Home1 = () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
        <FocusedStatusBar background={COLORS.primary} />
        <View style={{ flex:1 }} >
            {/*  contain our nft list */}
            <View style={{ zIndex: 0 }} >
            <FlatList data={NFTData}
                renderItem={({item}) => <Text>{item.name}</Text> }
            />
            </View>
        </View>
    </SafeAreaView>
  )
};

export default Home1;
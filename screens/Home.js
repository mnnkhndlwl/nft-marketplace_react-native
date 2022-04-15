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
            {/* getting data from our dummydata rendering name of each item from dummydata providing a unique and
             also showing homeheader component */}
            <FlatList data={NFTData}
                renderItem={({item}) => <NFTCard data={item} /> } 
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<HomeHeader />}
            />
            </View>
            <View style={{
                position:"absolute",
                top:0,
                right:0,
                left:0,
                bottom:0,
                zIndex:-1,
            }}>
                <View style={{ height:300,backgroundColor:COLORS.primary }} />
                <View style={{ flex:1,backgroundColor:COLORS.white }} />
            </View>
        </View>
    </SafeAreaView>
  )
};

export default Home1;
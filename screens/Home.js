import {Text,View,SafeAreaView,FlatList } from 'react-native';
import { useState } from 'react';
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { NFTCard,HomeHeader,FocusedStatusBar } from '../components';

const Home1 = () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
        <FocusedStatusBar background={COLORS.primary} />
    </SafeAreaView>
  )
};

export default Home1;
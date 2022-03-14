import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BottomNavigation,Badge,Text,Button } from 'react-native-paper';
import { Home } from "./Home";
import { AllCurrency } from "./AllCurrency";
import { Wallet } from "./Wallet";
import { Acount } from "./Account";

const MusicRoute = () =>  <Acount/>

const RecentWallet = () =>   <Wallet/>

const AlbumsRoute = () => <AllCurrency/>;

const RecentsRoute = () => <Home/>;

export const Menu = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([

     
      { key: 'music', title: 'حساب', icon: 'account',color:'#20509e' },
      { key: 'Wallet', title: 'کیف پول', icon: 'wallet',color:'#2dd3aa' },
      { key: 'albums', title: 'بازار', icon: 'chart-tree',color:'#16d0c5' },
      { key: 'recents', title: 'خانه', icon: 'home',color:'#2dd3aa' },
    
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      music: MusicRoute,
      albums: AlbumsRoute,
      recents: RecentsRoute,
      Wallet: RecentWallet,
    });
  
    return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting={true}
        

      />
    );
};

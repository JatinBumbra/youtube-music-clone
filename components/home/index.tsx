import React from 'react';
import { StatusBar } from 'react-native';
import BottomBar from './BottomBar';
import FilterChips from './FilterChips';
import Header from './Header';
import HomeList from './HomeList';

const Home = () => {
  return (
    <>
      <StatusBar />
      <Header />
      <FilterChips />
      <HomeList />
      <BottomBar />
    </>
  );
};

export default Home;

import { StatusBar, View, StyleSheet } from 'react-native';
import BottomBar from './components/BottomBar';
import FilterChips from './components/FilterChips';
import Header from './components/Header';
import HomeList from './components/HomeList';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
      <FilterChips />
      <HomeList />
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    minHeight: '100%',
  },
});

import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './components/home';
import PlayScreen from './components/play-screen';

export default function App() {
  const [showPlayScreen, setShowPlayScreen] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <Home />
      <PlayScreen open={showPlayScreen} setOpen={setShowPlayScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    minHeight: '100%',
  },
});

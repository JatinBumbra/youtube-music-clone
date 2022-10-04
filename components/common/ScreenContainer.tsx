import { View, StyleSheet, StatusBar } from 'react-native';

const ScreenContainer = ({ children }: { children: any }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      {children}
    </View>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    minHeight: '100%',
  },
});

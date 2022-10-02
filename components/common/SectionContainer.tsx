import { View, StyleSheet } from 'react-native';

const SectionContainer = ({ children }: { children: any }) => {
  return <View style={styles.container}>{children}</View>;
};

export default SectionContainer;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
});

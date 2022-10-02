import { Text, StyleSheet } from 'react-native';
import { PrimaryTextColor } from './styles';

const SectionTitle = ({ children }: { children: string }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default SectionTitle;

const styles = StyleSheet.create({
  text: {
    color: PrimaryTextColor,
    fontWeight: '900',
    fontSize: 24,
    marginBottom: 16,
  },
});

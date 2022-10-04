import { ScrollView, Pressable, Text, StyleSheet, View } from 'react-native';
import { AndroidRippleColor, PrimaryTextColor } from '../common/styles';

const FilterChips = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {['Relax', 'Energise', 'Commute', 'Workout', 'Focus'].map((item) => (
          <Pressable
            key={item}
            style={styles.pressableChip}
            android_ripple={{ color: AndroidRippleColor }}
          >
            <Text style={styles.chipText}>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default FilterChips;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  pressableChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  chipText: {
    color: PrimaryTextColor,
  },
});

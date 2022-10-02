import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Music</Text>
      <View style={styles.iconsContainer}>
        {['cast', 'search', 'user'].map((icon) => (
          <Pressable
            style={styles.iconPressable}
            key={icon}
            onPress={() => {}}
            android_ripple={{
              color: 'rgba(255,255,255,0.2)',
              borderless: true,
            }}
            hitSlop={6}
          >
            <Feather name={icon} size={20} color='white' />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoText: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconPressable: {
    marginLeft: 16,
    padding: 6,
  },
});

import { View, StyleSheet, Pressable, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/header-icon.png')}
        style={styles.logo}
      />
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
  logo: {
    height: 30,
    width: 96,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconPressable: {
    marginLeft: 16,
    padding: 6,
  },
});

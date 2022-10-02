import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Feather, MaterialIcons, Octicons } from '@expo/vector-icons';
import { AndroidRippleColor, PrimaryTextColor } from './common/styles';

const BottomBar = () => {
  return (
    <View style={styles.container}>
      {[
        {
          icon: <Octicons name='home' size={20} color={PrimaryTextColor} />,
          label: 'Home',
        },
        {
          icon: <Feather name='compass' size={20} color={PrimaryTextColor} />,
          label: 'Explore',
        },
        {
          icon: (
            <MaterialIcons
              name='library-music'
              size={20}
              color={PrimaryTextColor}
            />
          ),
          label: 'Library',
        },
      ].map((option) => (
        <Pressable
          key={option.label}
          style={styles.pressableMenuItem}
          android_ripple={{
            color: AndroidRippleColor,
          }}
        >
          {option.icon}
          <Text style={styles.menuItemText}>{option.label}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#222',
  },
  pressableMenuItem: {
    alignItems: 'center',
    flexGrow: 1,
    paddingVertical: 8,
  },
  menuItemText: {
    color: PrimaryTextColor,
    fontSize: 10,
  },
});

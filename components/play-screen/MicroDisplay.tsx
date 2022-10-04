import { Dispatch, SetStateAction } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  AndroidRippleColor,
  PlaceholderBgColor,
  PrimaryTextColor,
  SongMetaStyle,
  SongTitleStyle,
} from '../common/styles';

const MicroDisplay = ({
  percent,
  setOpen,
}: {
  percent: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.miniPlayer}>
        <View style={styles.flexDisplay}>
          <Pressable onPress={() => setOpen(true)} style={styles.flexDisplay}>
            <View style={styles.cover}></View>
            <View style={styles.songInfo}>
              <Text style={SongTitleStyle}>Cinderella Man</Text>
              <Text style={SongMetaStyle}>Eminem</Text>
            </View>
          </Pressable>
          <View style={styles.flexDisplay}>
            {[
              {
                icon: (
                  <MaterialIcons
                    name='pause'
                    size={24}
                    color={PrimaryTextColor}
                  />
                ),
                onPress: () => {},
              },
              {
                icon: (
                  <MaterialIcons
                    name='skip-next'
                    size={24}
                    color={PrimaryTextColor}
                  />
                ),
                onPress: () => {},
              },
            ].map((item, i) => (
              <Pressable
                onPress={item.onPress}
                key={i}
                android_ripple={{ color: AndroidRippleColor, borderless: true }}
                style={styles.iconPressable}
                hitSlop={20}
              >
                {item.icon}
              </Pressable>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.track}>
        <View style={{ ...styles.roller, width: `${percent * 100}%` }}></View>
      </View>
    </View>
  );
};

export default MicroDisplay;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
  },
  miniPlayer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  flexDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cover: {
    height: 48,
    width: 48,
    borderRadius: 4,
    backgroundColor: PlaceholderBgColor,
  },
  songInfo: {
    marginHorizontal: 16,
  },
  iconPressable: {
    marginLeft: 24,
  },

  track: {
    height: 1,
    width: '100%',
    backgroundColor: '#888',
    borderRadius: 4,
  },
  roller: {
    height: 1,
    backgroundColor: PrimaryTextColor,
    borderRadius: 4,
  },
});

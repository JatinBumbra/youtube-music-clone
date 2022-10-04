import { Dispatch, SetStateAction } from 'react';
import { View, StyleSheet, Dimensions, Pressable, Text } from 'react-native';
import { Entypo, Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';
import {
  AndroidRippleColor,
  PlaceholderBgColor,
  PrimaryTextColor,
  SecondaryTextColor,
} from '../common/styles';

const FullDisplay = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <Pressable hitSlop={32} onPress={() => setOpen(false)}>
          <Entypo
            name='chevron-thin-down'
            size={16}
            color={SecondaryTextColor}
          />
        </Pressable>
        <Pressable hitSlop={32} onPress={() => {}}>
          <Feather name='more-vertical' size={24} color={SecondaryTextColor} />
        </Pressable>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.cover}></View>
        <View style={styles.titleContainer}>
          <Feather name='thumbs-down' size={24} color={SecondaryTextColor} />
          <Text style={styles.title}>Cinderella Man</Text>
          <Feather name='thumbs-up' size={24} color={SecondaryTextColor} />
        </View>
        <Text style={styles.artist}>Eminem</Text>

        <View style={styles.playTimeContainer}>
          <View style={styles.track}>
            <View style={{ ...styles.roller, width: '50%' }}>
              <View style={{ ...styles.controlDot, left: '100%' }}></View>
            </View>
          </View>
          <View style={styles.controls}>
            <Text style={styles.time}>2:00</Text>
            <Text style={styles.time}>4:00</Text>
          </View>
        </View>

        <View style={styles.controls}>
          {[
            {
              icon: (
                <Ionicons name='shuffle' size={30} color={SecondaryTextColor} />
              ),
              onPress: () => {},
            },
            {
              icon: (
                <MaterialIcons
                  name='skip-previous'
                  size={36}
                  color={PrimaryTextColor}
                />
              ),
              onPress: () => {},
            },
            {
              icon: (
                <MaterialIcons
                  name='pause'
                  size={40}
                  color={PrimaryTextColor}
                  style={styles.playControl}
                />
              ),
              onPress: () => {},
            },
            {
              icon: (
                <MaterialIcons
                  name='skip-next'
                  size={36}
                  color={PrimaryTextColor}
                />
              ),
              onPress: () => {},
            },
            {
              icon: (
                <MaterialIcons
                  name='repeat'
                  size={30}
                  color={SecondaryTextColor}
                />
              ),
              onPress: () => {},
            },
          ].map((item, i) => (
            <Pressable
              key={i}
              onPress={item.onPress}
              hitSlop={20}
              android_ripple={{
                color: AndroidRippleColor,
                borderless: true,
              }}
            >
              {item.icon}
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

export default FullDisplay;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161616',
    padding: 20,
    height: Dimensions.get('window').height,
  },

  mainContent: {
    alignItems: 'center',
    padding: 24,
    marginTop: '10%',
  },
  cover: {
    width: Dimensions.get('window').width - 64,
    height: Dimensions.get('window').width - 64,
    backgroundColor: PlaceholderBgColor,
    borderRadius: 8,
  },
  titleContainer: {
    marginTop: 32,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: PrimaryTextColor,
    fontWeight: '900',
    fontSize: 28,
  },
  artist: {
    marginTop: 4,
    color: SecondaryTextColor,
    fontSize: 18,
  },

  playTimeContainer: {
    width: '100%',
    marginTop: 32,
  },
  track: {
    height: 2,
    width: '100%',
    backgroundColor: '#888',
    borderRadius: 4,
  },
  roller: {
    height: 2,
    backgroundColor: PrimaryTextColor,
    borderRadius: 4,
  },
  controlDot: {
    position: 'absolute',
    height: 12,
    width: 12,
    backgroundColor: PrimaryTextColor,
    borderRadius: 8,
    top: -4,
  },
  time: {
    marginTop: 2,
    color: SecondaryTextColor,
    fontSize: 12,
  },

  controls: {
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  playControl: {
    borderRadius: 100,
    padding: 16,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  controlPressable: {
    borderRadius: 100,
    padding: 8,
  },
});
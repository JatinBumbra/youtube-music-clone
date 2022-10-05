import { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  AndroidRippleColor,
  PlaceholderBgColor,
  PrimaryTextColor,
  SongMetaStyle,
  SongTitleStyle,
} from '../common/styles';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../../context';
import { ISong } from '../../@types/interfaces';

const MicroDisplay = () => {
  const navigation = useNavigation();

  const { songs, audio, selectedSongId, playAudio, pauseAudio, playNext } =
    useAppContext();

  const [song, setSong] = useState<ISong>();

  useEffect(() => {
    if (selectedSongId) setSong(songs.find((sn) => sn.id === selectedSongId));
  }, [selectedSongId, songs]);

  return selectedSongId ? (
    <View style={styles.container}>
      <View style={styles.miniPlayer}>
        <View style={styles.flexDisplay}>
          <Pressable
            style={styles.flexDisplay}
            onPress={() => navigation.navigate('Player')}
          >
            <Image source={{ uri: song?.cover }} style={styles.cover} />
            <View style={styles.songInfo}>
              <Text style={SongTitleStyle}>{song?.name}</Text>
              <Text style={SongMetaStyle}>{song?.artist}</Text>
            </View>
          </Pressable>
          <View style={styles.flexDisplay}>
            {[
              {
                icon: (
                  <MaterialIcons
                    name={audio?.isPlaying ? 'pause' : 'play-arrow'}
                    size={24}
                    color={PrimaryTextColor}
                  />
                ),
                onPress: audio?.isPlaying ? pauseAudio : playAudio,
              },
              {
                icon: (
                  <MaterialIcons
                    name='skip-next'
                    size={24}
                    color={PrimaryTextColor}
                  />
                ),
                onPress: playNext,
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
        <View
          style={{
            ...styles.roller,
            width: `${(audio?.positionMillis / audio?.durationMillis) * 100}%`,
          }}
        ></View>
      </View>
    </View>
  ) : null;
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

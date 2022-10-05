import { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Text,
  Image,
} from 'react-native';
import { Entypo, Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';
import {
  AndroidRippleColor,
  PlaceholderBgColor,
  PrimaryTextColor,
  SecondaryTextColor,
} from '../common/styles';
import Slider from '@react-native-community/slider';
import ScreenContainer from '../common/ScreenContainer';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../../context';
import { ISong } from '../../@types/interfaces';

const FullDisplay = () => {
  const {
    songs,
    audio,
    playAudio,
    pauseAudio,
    playNext,
    playPrevious,
    selectedSongId,
  } = useAppContext();

  const navigation = useNavigation();

  const [song, setSong] = useState<ISong>();
  const [playbackDuration, setPlaybackDuration] = useState<{
    current: string;
    finish: string;
  }>({
    current: '00:00',
    finish: '00:00',
  });

  useEffect(() => {
    if (selectedSongId) setSong(songs.find((sn) => sn.id === selectedSongId));
  }, [selectedSongId, songs]);

  useEffect(() => {
    if (audio?.isLoaded && !audio.isBuffering) {
      let date = new Date(0);
      date.setMilliseconds(audio.positionMillis);
      const current = date.toISOString().slice(14, 19);
      date = new Date(0);
      date.setMilliseconds(audio.durationMillis);
      const finish = date.toISOString().slice(14, 19);
      setPlaybackDuration({ current, finish });
    }
  }, [audio]);

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <View style={styles.controls}>
          <Pressable hitSlop={32} onPress={() => navigation.goBack()}>
            <Entypo
              name='chevron-thin-down'
              size={16}
              color={SecondaryTextColor}
            />
          </Pressable>
          <Pressable hitSlop={32}>
            <Feather
              name='more-vertical'
              size={24}
              color={SecondaryTextColor}
            />
          </Pressable>
        </View>
        <View style={styles.mainContent}>
          <Image source={{ uri: song?.cover }} style={styles.cover} />
          <View style={styles.titleContainer}>
            <Feather name='thumbs-down' size={24} color={SecondaryTextColor} />
            <Text style={styles.title}>{song?.name}</Text>
            <Feather name='thumbs-up' size={24} color={SecondaryTextColor} />
          </View>
          <Text style={styles.artist}>{song?.artist}</Text>

          <View style={styles.playTimeContainer}>
            <Slider
              minimumValue={0}
              maximumValue={1}
              thumbTintColor={PrimaryTextColor}
              minimumTrackTintColor={PrimaryTextColor}
              maximumTrackTintColor={SecondaryTextColor}
              tapToSeek
              value={audio?.positionMillis / audio?.durationMillis || 0}
            />
            <View style={styles.controls}>
              <Text style={styles.time}>{playbackDuration.current}</Text>
              <Text style={styles.time}>{playbackDuration.finish}</Text>
            </View>
          </View>

          <View style={styles.controls}>
            {[
              {
                icon: (
                  <Ionicons
                    name='shuffle'
                    size={30}
                    color={SecondaryTextColor}
                  />
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
                onPress: playPrevious,
              },
              {
                icon: (
                  <MaterialIcons
                    name={audio?.isPlaying ? 'pause' : 'play-arrow'}
                    size={40}
                    color={PrimaryTextColor}
                    style={styles.playControl}
                  />
                ),
                onPress: audio?.isPlaying ? pauseAudio : playAudio,
              },
              {
                icon: (
                  <MaterialIcons
                    name='skip-next'
                    size={36}
                    color={PrimaryTextColor}
                  />
                ),
                onPress: playNext,
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
    </ScreenContainer>
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
    marginTop: '5%',
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
    textAlign: 'center',
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

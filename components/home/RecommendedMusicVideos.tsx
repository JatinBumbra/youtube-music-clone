import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import { ISong } from '../../@types/interfaces';
import { useAppContext } from '../../context';
import SectionContainer from '../common/SectionContainer';
import SectionTitle from '../common/SectionTitle';
import {
  PlaceholderBgColor,
  SongMetaStyle,
  SongTitleStyle,
} from '../common/styles';

const RecommendedMusicVideos = () => {
  const { songs, setSelectedSongId } = useAppContext();

  const navigation = useNavigation();

  const [data, setData] = useState<ISong[]>([]);

  useEffect(() => {
    setData(songs.slice(37, 45));
  }, [songs]);

  return (
    <SectionContainer>
      <SectionTitle>Recommended Music Videos</SectionTitle>
      <View>
        <ScrollView horizontal>
          {data.map((song, i) => (
            <Pressable
              style={styles.songItem}
              key={song.id}
              onPress={() => {
                navigation.navigate('Player');
                setSelectedSongId(song.id);
              }}
            >
              <Image source={{ uri: song.cover }} style={styles.videoPreview} />
              <Text style={SongTitleStyle}>
                {song.name.length > 35
                  ? song.name.slice(0, 35) + '...'
                  : song.name}
              </Text>
              <Text style={SongMetaStyle}>
                {song.artist.length > 20
                  ? song.artist.slice(0, 20) + '...'
                  : song.artist}{' '}
                | {(Math.random() * 10).toFixed(2)}M views
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </SectionContainer>
  );
};

export default RecommendedMusicVideos;

const styles = StyleSheet.create({
  songItem: {
    marginRight: 24,
  },
  videoPreview: {
    height: 180,
    width: Dimensions.get('screen').width * 0.7,
    backgroundColor: PlaceholderBgColor,
    borderRadius: 4,
  },
});

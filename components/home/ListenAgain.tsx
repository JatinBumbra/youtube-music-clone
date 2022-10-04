import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import { ISong } from '../../@types/interfaces';
import { useAppContext } from '../../context';
import SectionContainer from '../common/SectionContainer';
import SectionTitle from '../common/SectionTitle';
import { PlaceholderBgColor, SongTitleStyle } from '../common/styles';

const ListenAgain = () => {
  const navigation = useNavigation();

  const { songs, setSelectedSongId } = useAppContext();

  const [data, setData] = useState<ISong[][]>([]);

  useEffect(() => {
    const array = songs.slice(18, 37);
    const array2d = [];

    while (array.length) array2d.push(array.splice(0, 2));

    setData(array2d);
  }, [songs]);

  return (
    <SectionContainer>
      <SectionTitle>Listen Again</SectionTitle>
      <View>
        <ScrollView horizontal>
          {data.map((subarray, i) => (
            <View key={i}>
              {subarray.map((song) => (
                <Pressable
                  key={song.id}
                  onPress={() => {
                    navigation.navigate('Player');
                    setSelectedSongId(song.id);
                  }}
                  style={styles.songItem}
                >
                  <Image
                    source={{ uri: song.cover }}
                    style={styles.albumCoverContainer}
                  />
                  <Text style={SongTitleStyle}>
                    {song.name.length > 10
                      ? song.name.slice(0, 10) + '...'
                      : song.name}
                  </Text>
                </Pressable>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </SectionContainer>
  );
};

export default ListenAgain;

const styles = StyleSheet.create({
  songItem: {
    marginRight: 24,
    marginBottom: 24,
  },
  albumCoverContainer: {
    height: 96,
    width: 96,
    backgroundColor: PlaceholderBgColor,
    borderRadius: 4,
  },
});

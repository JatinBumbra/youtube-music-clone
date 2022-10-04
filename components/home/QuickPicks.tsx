import { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SectionTitle from '../common/SectionTitle';
import SectionContainer from '../common/SectionContainer';
import {
  AndroidRippleColor,
  PlaceholderBgColor,
  PrimaryTextColor,
  SecondaryTextColor,
  SongMetaStyle,
} from '../common/styles';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../../context';
import { ISong } from '../../@types/interfaces';

const QuickPicks = () => {
  const { songs, setSelectedSongId } = useAppContext();

  const [data, setData] = useState<ISong[][]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    const array = songs.slice(0, 18);
    const array2d = [];

    while (array.length) array2d.push(array.splice(0, 4));

    setData(array2d);
  }, [songs]);

  return (
    <SectionContainer>
      <Text style={styles.lead}>Start radio based on a song</Text>
      <SectionTitle>Quick Picks</SectionTitle>
      <View style={{ marginTop: -6 }}>
        <ScrollView horizontal>
          {data.map((subarray, i) => (
            <View key={i} style={styles.songsBatchContainer}>
              {subarray.map((song) => (
                <Pressable
                  android_ripple={{ color: AndroidRippleColor }}
                  onPress={() => {
                    navigation.navigate('Player');
                    setSelectedSongId(song.id);
                  }}
                  style={styles.songItem}
                  key={song.id}
                >
                  <Image
                    source={{ uri: song.cover }}
                    style={styles.ablumImageContainer}
                  />
                  <View style={styles.songMetaDataContainer}>
                    <Text style={styles.songTitle}>{song.name}</Text>
                    <Text style={SongMetaStyle}>{song.artist}</Text>
                  </View>
                  <MaterialCommunityIcons
                    name='dots-vertical'
                    size={24}
                    color={SecondaryTextColor}
                  />
                </Pressable>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </SectionContainer>
  );
};

export default QuickPicks;

const styles = StyleSheet.create({
  lead: {
    textTransform: 'uppercase',
    color: SecondaryTextColor,
    fontSize: 13,
  },
  songsBatchContainer: { marginRight: 12 },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.8,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  ablumImageContainer: {
    height: 56,
    width: 56,
    backgroundColor: PlaceholderBgColor,
    borderRadius: 4,
  },
  songMetaDataContainer: {
    marginHorizontal: 12,
    flexGrow: 1,
  },
  songTitle: {
    color: PrimaryTextColor,
  },
});

import { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ISong } from '../../@types/interfaces';
import { useAppContext } from '../../context';
import SectionContainer from '../common/SectionContainer';
import SectionTitle from '../common/SectionTitle';
import {
  PlaceholderBgColor,
  SongMetaStyle,
  SongTitleStyle,
} from '../common/styles';

const MixedForYou = () => {
  const { songs, setSelectedSongId } = useAppContext();

  const navigation = useNavigation();

  const [data, setData] = useState<ISong[]>([]);

  useEffect(() => {
    setData(songs.slice(45, 50));
  }, [songs]);

  return (
    <SectionContainer>
      <SectionTitle>Mixed For You</SectionTitle>
      <View>
        <ScrollView horizontal>
          {data.map((song, i) => (
            <Pressable
              style={styles.item}
              key={i}
              onPress={() => {
                navigation.navigate('Player');
                setSelectedSongId(song.id);
              }}
            >
              <Image source={{ uri: song.cover }} style={styles.cover} />
              <Text style={SongTitleStyle}>My supermix</Text>
              <Text style={SongMetaStyle}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorem, vitae.
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </SectionContainer>
  );
};

export default MixedForYou;

const styles = StyleSheet.create({
  item: {
    width: Dimensions.get('screen').width * 0.4,
    marginRight: 24,
  },
  cover: {
    width: Dimensions.get('screen').width * 0.4,
    height: Dimensions.get('screen').width * 0.4,
    backgroundColor: PlaceholderBgColor,
    borderRadius: 4,
  },
});

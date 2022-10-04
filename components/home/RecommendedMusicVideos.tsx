import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import SectionContainer from '../common/SectionContainer';
import SectionTitle from '../common/SectionTitle';
import {
  PlaceholderBgColor,
  SongMetaStyle,
  SongTitleStyle,
} from '../common/styles';

const RecommendedMusicVideos = () => {
  return (
    <SectionContainer>
      <SectionTitle>Recommended Music Videos</SectionTitle>
      <View>
        <ScrollView horizontal>
          {Array(10)
            .fill(1)
            .map((_, i) => (
              <Pressable style={styles.songItem} key={i} onPress={() => {}}>
                <View style={styles.videoPreview}></View>
                <Text style={SongTitleStyle}>Cinderella Man</Text>
                <Text style={SongMetaStyle}>Eminem | 3.1M views</Text>
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

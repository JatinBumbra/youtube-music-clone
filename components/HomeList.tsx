import { ScrollView, StyleSheet } from 'react-native';
import ListenAgain from './ListenAgain';
import MixedForYou from './MixedForYou';
import QuickPicks from './QuickPicks';
import RecommendedMusicVideos from './RecommendedMusicVideos';

const HomeList = () => {
  return (
    <ScrollView style={styles.container}>
      <QuickPicks />
      <ListenAgain />
      <RecommendedMusicVideos />
      <MixedForYou />
    </ScrollView>
  );
};

export default HomeList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexBasis: 1,
  },
});

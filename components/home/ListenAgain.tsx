import { View, ScrollView, Text, StyleSheet, Pressable } from 'react-native';
import SectionContainer from '../common/SectionContainer';
import SectionTitle from '../common/SectionTitle';
import { PlaceholderBgColor, SongTitleStyle } from '../common/styles';

const ListenAgain = () => {
  const array = Array(11).fill(1);
  const array2d = [];

  while (array.length) array2d.push(array.splice(0, 2));

  return (
    <SectionContainer>
      <SectionTitle>Listen Again</SectionTitle>
      <View>
        <ScrollView horizontal>
          {array2d.map((subarray, i) => (
            <View key={i}>
              {subarray.map((_, i) => (
                <Pressable key={i} onPress={() => {}} style={styles.songItem}>
                  <View style={styles.albumCoverContainer}></View>
                  <Text style={SongTitleStyle}>Cinderella Man</Text>
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
    marginRight: 16,
    marginBottom: 24,
  },
  albumCoverContainer: {
    height: 96,
    width: 96,
    backgroundColor: PlaceholderBgColor,
    borderRadius: 4,
  },
});

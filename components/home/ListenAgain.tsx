import { View, ScrollView, Text, StyleSheet, Pressable } from 'react-native';
import SectionContainer from '../common/SectionContainer';
import SectionTitle from '../common/SectionTitle';
import { PlaceholderBgColor, SongTitleStyle } from '../common/styles';

const ListenAgain = () => {
  return (
    <SectionContainer>
      <SectionTitle>Listen Again</SectionTitle>
      <View>
        <ScrollView horizontal>
          {Array(5)
            .fill(1)
            .map((_, i) => (
              <View key={i}>
                {Array(2)
                  .fill(1)
                  .map((_, i) => (
                    <Pressable
                      key={i}
                      onPress={() => {}}
                      style={styles.songItem}
                    >
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

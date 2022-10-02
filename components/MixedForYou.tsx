import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import SectionContainer from './common/SectionContainer';
import SectionTitle from './common/SectionTitle';
import {
  PlaceholderBgColor,
  SongMetaStyle,
  SongTitleStyle,
} from './common/styles';

const MixedForYou = () => {
  return (
    <SectionContainer>
      <SectionTitle>Mixed For You</SectionTitle>
      <View>
        <ScrollView horizontal>
          {Array(10)
            .fill(1)
            .map((_, i) => (
              <Pressable style={styles.item} key={i} onPress={() => {}}>
                <View style={styles.cover}></View>
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

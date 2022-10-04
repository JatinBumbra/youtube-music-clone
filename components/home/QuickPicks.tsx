import {
  View,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
  Dimensions,
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

const QuickPicks = () => {
  const navigate = useNavigation();

  const array = Array(11).fill(1);
  const array2d = [];

  while (array.length) array2d.push(array.splice(0, 4));

  return (
    <SectionContainer>
      <Text style={styles.lead}>Start radio based on a song</Text>
      <SectionTitle>Quick Picks</SectionTitle>
      <View style={{ marginTop: -6 }}>
        <ScrollView horizontal>
          {array2d.map((subarray, i) => (
            <View key={i} style={styles.songsBatchContainer}>
              {subarray.map((_, j) => (
                <Pressable
                  android_ripple={{ color: AndroidRippleColor }}
                  onPress={() => navigate.navigate('Player')}
                  style={styles.songItem}
                  key={i + j}
                >
                  <View style={styles.ablumImageContainer}></View>
                  <View style={styles.songMetaDataContainer}>
                    <Text style={styles.songTitle}>Cinderella Man {i + j}</Text>
                    <Text style={SongMetaStyle}>Eminem</Text>
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

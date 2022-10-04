import { Dispatch, SetStateAction } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import FullDisplay from './FullDisplay';
import MicroDisplay from './MicroDisplay';

const PlayScreen = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const height = open ? Dimensions.get('window').height : undefined;
  const bottom = open ? undefined : 52;

  return (
    <View style={{ ...styles.container, height, bottom }}>
      {open ? (
        <FullDisplay setOpen={setOpen} />
      ) : (
        <MicroDisplay setOpen={setOpen} />
      )}
    </View>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
});

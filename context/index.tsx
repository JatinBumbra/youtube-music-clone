import { Audio } from 'expo-av';
import { createContext, useState, useContext, useEffect } from 'react';
import { IAppContext, IAudio, ISong } from '../@types/interfaces';

const AppContext = createContext({
  audio: undefined,
  selectedSongId: undefined,
  setSelectedSongId: () => {},
  songs: [],
  playAudio: async () => {},
  pauseAudio: async () => {},
  playNext: async () => {},
  playPrevious: async () => {},
} as IAppContext);

const AppContextProvider = ({ children }: { children: any }) => {
  const [songs, setSongs] = useState<ISong[]>([]);
  const [selectedSongId, setSelectedSongId] = useState<string | undefined>('');
  const [audio, setAudio] = useState<IAudio | undefined>(undefined);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          'https://itunes.apple.com/search?term=megadeth'
        );
        const data: {
          results: any[];
        } = await res.json();

        const songs: ISong[] = data.results.map((item) => ({
          id: item.trackId,
          artist: item.artistName,
          playUrl: item.previewUrl,
          name: item.trackName,
          cover: item.artworkUrl100,
        }));
        setSongs(songs.reverse());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (audio?.sound) {
        await audio.sound.unloadAsync();
      }
      if (selectedSongId) {
        const sn = songs.find((s) => s.id === selectedSongId);
        const { sound } = await Audio.Sound.createAsync(
          {
            uri: sn!.playUrl,
          },
          {},
          (status) =>
            setAudio(
              (prev) =>
                ({
                  ...prev,
                  isPlaying: status.isPlaying,
                  didJustFinish: status.didJustFinish,
                  positionMillis: status.positionMillis,
                  durationMillis: status.durationMillis,
                  isLooping: status.isLooping,
                } as IAudio)
            )
        );

        setAudio((prev) => ({ ...prev, sound } as IAudio));
      } else {
        setAudio(undefined);
      }
    })();
  }, [selectedSongId]);

  useEffect(() => {
    if (!audio?.isPlaying && !audio?.positionMillis) playAudio();
    if (audio?.didJustFinish) playNext();
  }, [audio]);

  const playAudio = async () => {
    if (!audio?.isPlaying) {
      await audio?.sound.playAsync();
    }
  };

  const pauseAudio = async () => {
    if (audio?.isPlaying) {
      await audio?.sound.pauseAsync();
    }
  };

  const playNext = async () => {
    let index = songs.indexOf(songs.find((s) => s.id === selectedSongId)!);
    if (index === songs.length - 1) index = -1;
    setSelectedSongId(songs[index + 1].id);
  };

  const playPrevious = async () => {
    let index = songs.indexOf(songs.find((s) => s.id === selectedSongId)!);
    if (index === 0) index = 1;
    setSelectedSongId(songs[index - 1].id);
  };

  return (
    <AppContext.Provider
      value={{
        songs,
        audio,
        selectedSongId,
        setSelectedSongId,
        playAudio,
        pauseAudio,
        playNext,
        playPrevious,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);

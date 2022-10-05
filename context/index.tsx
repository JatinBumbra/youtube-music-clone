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
        console.error('Failed to fetch the songs');
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (audio?.sound) {
        try {
          await audio.sound.unloadAsync();
        } catch (error) {
          console.error('Unable to unload the audio');
        }
      }
      if (selectedSongId) {
        try {
          const sn = songs.find((s) => s.id === selectedSongId);
          const { sound } = await Audio.Sound.createAsync(
            {
              uri: sn!.playUrl,
            },
            {},
            (status) => {
              setAudio(
                (prev) =>
                  ({
                    ...prev,
                    isLoaded: status.isLoaded,
                    isBuffering: status.isBuffering,
                    isPlaying: status.isPlaying,
                    didJustFinish: status.didJustFinish,
                    positionMillis: status.positionMillis,
                    durationMillis: status.durationMillis,
                    isLooping: status.isLooping,
                  } as IAudio)
              );
            }
          );

          setAudio((prev) => ({ ...prev, sound } as IAudio));
        } catch (error) {
          console.error('Unable to create the audio');
        }
      } else {
        setAudio(undefined);
      }
    })();
  }, [selectedSongId]);

  useEffect(() => {
    if (audio?.isLoaded && !audio.isBuffering) {
      if (!audio?.isPlaying && !audio?.positionMillis) playAudio();
      if (audio?.didJustFinish) playNext();
    }
  }, [audio]);

  const playAudio = async () => {
    try {
      if (!audio?.isPlaying) {
        await audio?.sound.playAsync();
      }
    } catch (error) {
      console.error('Unable to play the audio');
    }
  };

  const pauseAudio = async () => {
    try {
      if (audio?.isPlaying) {
        await audio?.sound.pauseAsync();
      }
    } catch (error) {
      console.error('Unable to pause the audio');
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

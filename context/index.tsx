import { createContext, useState, useContext, useEffect } from 'react';
import { IAppContext, ISong } from '../@types/interfaces';

const AppContext = createContext({
  selectedSongId: undefined,
  setSelectedSongId: () => {},
  songs: [],
} as IAppContext);

const AppContextProvider = ({ children }: { children: any }) => {
  const [songs, setSongs] = useState<ISong[]>([]);
  const [selectedSongId, setSelectedSongId] = useState<string | undefined>('');

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
          name: item.trackName,
          cover: item.artworkUrl100,
        }));
        setSongs(songs.reverse());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <AppContext.Provider value={{ songs, selectedSongId, setSelectedSongId }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);

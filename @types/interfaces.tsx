import { Dispatch, SetStateAction } from 'react';

export interface ISong {
  id: string;
  cover: string;
  name: string;
  artist: string;
}

export interface IAppContext {
  songs: ISong[];
  selectedSongId: string | undefined;
  setSelectedSongId: Dispatch<SetStateAction<string | undefined>>;
}

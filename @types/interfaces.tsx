import { Audio } from 'expo-av';
import { Dispatch, SetStateAction } from 'react';

export interface ISong {
  id: string;
  cover: string;
  name: string;
  artist: string;
  playUrl: string;
}

export interface IAudio {
  sound: Audio.Sound;
  isPlaying: boolean;
  didJustFinish: boolean;
  isLooping: boolean;
  durationMillis: number;
  positionMillis: number;
}

export interface IAppContext {
  songs: ISong[];
  audio: IAudio | undefined;
  selectedSongId: string | undefined;
  setSelectedSongId: Dispatch<SetStateAction<string | undefined>>;
  playAudio: () => Promise<void>;
  pauseAudio: () => Promise<void>;
  playNext: () => Promise<void>;
  playPrevious: () => Promise<void>;
}

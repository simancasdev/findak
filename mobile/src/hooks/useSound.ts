import {useEffect} from "react";
import Sound from "react-native-sound";

Sound.setCategory("Playback");

type SoundName = "tab_item_press.mp3";

export const useSound = (soundName: SoundName): Sound => {
  const sound = new Sound(soundName, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log("failed to load the sound", error);
      return;
    }
  });

  useEffect(() => {
    sound.setVolume(0.5);
    return () => {
      sound.release();
    };
  }, []);

  return sound;
};

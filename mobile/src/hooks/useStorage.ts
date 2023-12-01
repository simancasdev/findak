import AsyncStorage from "@react-native-async-storage/async-storage";

type Key = "@theme" | "@auth-token" | "@language";

type IUseStorage = {
  read: <T>(key: Key) => Promise<T | null>;
  save: (key: Key, data: any) => Promise<void>;
  remove: (key: Key) => Promise<void>;
};

export const useStorage = (): IUseStorage => {
  const read = async <T>(key: Key): Promise<T | null> => {
    const data = await AsyncStorage.getItem(key);
    return data !== null ? JSON.parse(data) : null;
  };

  const save = async (key: Key, data: any): Promise<void> => {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  };

  const remove = async (key: Key): Promise<void> => {
    await AsyncStorage.removeItem(key);
  };

  return {read, save, remove};
};

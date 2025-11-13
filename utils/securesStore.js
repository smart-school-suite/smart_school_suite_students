import * as SecureStore from 'expo-secure-store';

export const secureStorage = {
  async setItem(key, value) {
    await SecureStore.setItemAsync(key, value);
  },
  async getItem(key) {
    return await SecureStore.getItemAsync(key);
  },
  async removeItem(key) {
    await SecureStore.deleteItemAsync(key);
  },
};

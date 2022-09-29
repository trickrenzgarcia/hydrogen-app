import { CapacitorConfig } from '@capacitor/cli';

export interface PluginsConfig {
  [CAPACITOR_ANDROID_STUDIO_PATH: string]: | {
    [CAPACITOR_ANDROID_STUDIO_PATH: string]: 'D:\\Program Files\\Android\\Android Studio\\bin\\studio64.exe'
  }
  | undefined
}

const config: CapacitorConfig = {
  appId: 'com.brojava.kapengmatapang',
  appName: 'Kapeng Matapang',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'http://localhost:3000',
    cleartext: true,
  },
  loggingBehavior: 'debug',
  backgroundColor: '#262626'
};



export default config;

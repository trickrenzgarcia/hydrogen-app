import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.brojava.kapengmatapang',
  appName: 'hydrogen-app',
  webDir: 'src',
  bundledWebRuntime: false,
  server: {
    url: 'https://kapengmatapang.netlify.app',
    cleartext: true
  }
};

export interface PluginsConfig {
  [CAPACITOR_ANDROID_STUDIO_PATH: string]: | {
    [CAPACITOR_ANDROID_STUDIO_PATH: string]: 'D:\\Program Files\\Android\\Android Studio\\bin\\studio64.exe'
  }
  | undefined
}

export default config;

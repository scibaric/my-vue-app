/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_METER_READINGS_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

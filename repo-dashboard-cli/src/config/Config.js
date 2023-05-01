const config = {
  MODE: import.meta.env.MODE,
  ASSETS_PATH_DEV: import.meta.env.VITE_ASSETS_PATH_DEV,
  ASSETS_PATH: import.meta.env.VITE_ASSETS_PATH,
  API_SERVER: import.meta.env.VITE_API_SERVER,
  API_URL: import.meta.env.VITE_API_URL,
};

export { config };

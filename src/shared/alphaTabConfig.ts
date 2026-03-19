// alphaTabConfig.ts

// Default configurations for initializing AlphaTab
const defaultConfig = {
    apiKey: 'YOUR_API_KEY',
    defaultInstrument: 'Piano',
    volume: 0.5,
    tempo: 120,
    autoPlay: false,
};

// Utility function to initialize AlphaTab with settings
function initializeAlphaTab(customSettings = {}) {
    const settings = { ...defaultConfig, ...customSettings };

    const alphaTabInstance = new AlphaTab(settings);
    return alphaTabInstance;
}

// Exporting the configuration and the initializer function
export { defaultConfig, initializeAlphaTab };
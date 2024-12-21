module.exports = function (api) {
  api.cache(true);
  const plugins = [['module:react-native-dotenv',
    {
      envName: 'APP_ENV',
      moduleName: '@env',
      path: '.env',
      blocklist: null,
      allowlist: null,
      blacklist: null,
      whitelist: null,
      safe: false,
      allowUndefined: true,
      verbose: false,
    },
  ],
  ];

  return {
    presets: ['babel-preset-expo'],

    
  plugins
    
}
}

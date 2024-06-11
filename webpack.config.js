const path = require('path');

module.exports = {
  "mode": "development",
  "devtool": "inline-source-map",
  "output": {
    "publicPath": "public",
    "filename": "[name].pack.js",
    "path": path.resolve(__dirname, 'public'),
  },
  "entry": {
    "index": "./index.ts"
  },
  "resolve": {
    "extensions": [
      ".tsx",
      ".ts",
      ".js",
      ".json"
    ],
  },
  "module": {
    "rules": [
      {
        "test": /\.ts$/,
        "use": "ts-loader",
        "exclude": /node_modules/,
        // "include": [path.resolve(__dirname, '')],
      }
    ]
  }
};
const withImages = require('next-images');
const withVideos = require('next-videos');

module.exports = withImages(
  withVideos({
    webpack: (config) => {
      config.module.rules.push({
        test: /\.mp4$/,
        use: ['file-loader'],
      });
      return config;
    },
  })
);
/** @type {import('next').NextConfig} */
const nextConfig = {
    module: {
        rules: [
          {
            test: /\.(mp4|webm)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'videos/',
              publicPath: '/_next/static/videos/',
            },
          },
        ],
      },
}

module.exports = nextConfig

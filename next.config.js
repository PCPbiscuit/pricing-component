/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    const path = require('path');
    const ManifestPlugin = require('webpack-manifest-plugin');
    const { CleanWebpackPlugin } = require('clean-webpack-plugin');

    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
      }),

      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['css/*', 'js/*', 'fonts/*', 'images/*'],
        verbose: true,
      }),
    );

    config.module.rules.push(
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: [path.resolve('public/svgs')],
        use: ['file-loader?name=images/[name].[hash].[ext]'],
      },
      {
        test: /\.(svg)$/,
        include: [path.resolve('public/svgs')],
        use: ['svg-inline-loader?classPrefix!removeTags=true'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader?name=fonts/[name].[hash].[ext]'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    );
    return config;
  },
};

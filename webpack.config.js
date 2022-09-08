const path = require('path'),
  HTMLplugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
  OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
  pathName = 'src',
  buildName = 'dist',
  isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    main: path.resolve(__dirname, pathName, 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, buildName),
    filename: 'bundle.[hash].js',
    publicPath: '/',
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, buildName),
      watch: true,
    },
    watchFiles: [`${pathName}/**/*`],
    proxy: {
      '/api/v1': {
        target: 'https://todo.hillel.it/',
        pathRewrite: {'^/api/v1': ''},
        changeOrigin: true,
        secure: true,
      },
      '/api/v2': {
        target: 'http://localhost:3000/',
        pathRewrite: {'^/api/v2': ''},
        changeOrigin: true,
        secure: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },
      {
        test: /\.svg$/i,
        type: 'asset/inline',
        use: {
          loader: 'svgo-loader'
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.css$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      api: path.resolve(__dirname, pathName, 'api'),
      assets: path.resolve(__dirname, pathName, 'assets'),
      images: path.resolve(__dirname, pathName, 'assets', 'images'),
      styles: path.resolve(__dirname, pathName, 'styles'),
      pages: path.resolve(__dirname, pathName, 'pages'),
      hoc: path.resolve(__dirname, pathName, 'hoc'),
      hooks: path.resolve(__dirname, pathName, 'hooks'),
      containers: path.resolve(__dirname, pathName, 'containers'),
      components: path.resolve(__dirname, pathName, 'components'),
      contexts: path.resolve(__dirname, pathName, 'contexts'),
      store: path.resolve(__dirname, pathName, 'store'),
      actions: path.resolve(__dirname, pathName, 'store', 'actions'),
      reducers: path.resolve(__dirname, pathName, 'store', 'reducers'),
      types: path.resolve(__dirname, pathName, 'store', 'types'),
      constants: path.resolve(__dirname, pathName, 'constants'),
      configs: path.resolve(__dirname, pathName, 'configs'),
      services: path.resolve(__dirname, pathName, 'services'),
      navigation: path.resolve(__dirname, pathName, 'navigation'),
      '@': path.resolve(__dirname, pathName),
    },
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new HTMLplugin({
      template: path.resolve(__dirname, pathName, 'index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
  ],
};

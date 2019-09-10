const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const reactExternal = {
	root: 'React',
	commonjs2: 'react',
	commonjs: 'react',
	amd: 'react'
};

const reactDOMExternal = {
	root: 'ReactDOM',
	commonjs2: 'react-dom',
	commonjs: 'react-dom',
	amd: 'react-dom'
};

// This is the production configuration.
// It compiles slowly and is focused on producing a fast and minimal bundle.
// The development configuration is different and lives in a separate file.
const config = {
	// Don't attempt to continue if there are any errors.
	bail: true,
	entry: {
		components: './src/components/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		library: 'TSReact',
		libraryTarget: 'umd'
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx']
	},
	module: {
		rules: [
			{
				exclude: [/\.html$/, /\.(js|jsx)$/, /\.css$/, /\.json$/, /\.svg$/],
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: '[name].[ext]'
				}
			},
			// Process JS with Babel.
			{
				test: /\.(js|jsx)$/,
				include: path.resolve('./src'),
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader'
				]
			},
			// JSON is not enabled by default in Webpack but both Node and Browserify
			// allow it implicitly so we also enable it.
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			// "file" loader for svg
			{
				test: /\.svg$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			}
			// ** STOP ** Are you adding a new loader?
			// Remember to add the new extension(s) to the "url" loader exclusion list.
		]
	},
	plugins: [
		// This helps ensure the builds are consistent if source hasn't changed:
		new webpack.optimize.OccurrenceOrderPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	// Some libraries import Node modules but don't use them in the browser.
	// Tell Webpack to provide empty mocks for them so importing them works.
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},
	externals: {
		react: reactExternal,
		'react-dom': reactDOMExternal
	}
};

module.exports = config;

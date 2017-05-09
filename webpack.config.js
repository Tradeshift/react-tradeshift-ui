const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// This is the production configuration.
// It compiles slowly and is focused on producing a fast and minimal bundle.
// The development configuration is different and lives in a separate file.
module.exports = {
	// Don't attempt to continue if there are any errors.
	bail: true,
	entry: {
		components: './src/components/index.js'
	},
	output: {
		filename: './dist/[name].js',
		library: 'react-tradeshift-ui',
		libraryTarget: 'commonjs2'
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx']
	},
	module: {
		rules: [
			{
				exclude: [/\.html$/, /\.(js|jsx)$/, /\.css$/, /\.json$/, /\.svg$/],
				loader: 'url-loader',
				query: {
					limit: 10000,
					name: 'dist/[name].[ext]'
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
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader?importLoaders=1!postcss'
				})
				// Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
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
				query: {
					name: 'dist/[name].[ext]'
				}
			}
			// ** STOP ** Are you adding a new loader?
			// Remember to add the new extension(s) to the "url" loader exclusion list.
		]
	},
	plugins: [
		// This helps ensure the builds are consistent if source hasn't changed:
		new webpack.optimize.OccurrenceOrderPlugin(),
		// Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
		new ExtractTextPlugin('dist/[name].css')
	],
	// Some libraries import Node modules but don't use them in the browser.
	// Tell Webpack to provide empty mocks for them so importing them works.
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},
	externals: {
		react: 'react',
		'react-dom': 'react-dom',
		'prop-types': 'prop-types'
	}
};

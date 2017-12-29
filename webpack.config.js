const bundle = {
	entry: './final.js',

	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
		library: 'Conjugate',
		libraryTarget: 'window'
	},


	module: {

		loaders: [

			{
				test:/\.js$/,
				exclude:/(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015'],
					plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
				}
			}

		]

	}
}


const npmPackage = {
	entry: './final.js',

	output: {
		path: __dirname,
		filename: 'index.js',
		library: 'Conjugate',
		libraryTarget: 'commonjs2'
	},


	module: {

		loaders: [

			{
				test:/\.js$/,
				exclude:/(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015'],
					plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
				}
			}

		]

	}
}

module.exports = [bundle, npmPackage]
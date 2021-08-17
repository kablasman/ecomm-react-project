const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}, {
				test: /\.html$/,
				use: ['html-loader']
			}, {
				test: /\.css$/,
				use:['style-loader','css-loader']
            }, {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ['file-loader']
            }
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		})
	], 
	devServer: {
		port: 5000,
		historyApiFallback: {
			index: `index.html`
		}
	}, 
	output: {
		publicPath: `/`
    }, 
	resolve: {
		alias: {
			components: path.resolve(__dirname, 'src/components/'),
			pages: path.resolve(__dirname, 'src/pages/'),
			css: path.resolve(__dirname, 'src/css/'),
			img: path.resolve(__dirname, 'src/img/'),
			contexts: path.resolve(__dirname, 'src/contexts/'),
			utils: path.resolve(__dirname, 'src/utils/'),
		}
	}
}


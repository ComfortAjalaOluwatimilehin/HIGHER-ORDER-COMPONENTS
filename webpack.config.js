var path = require("path")

module.exports = {
		
		entry:"./app.js",
		output:{
			filename:"bundle.js",
			path:path.resolve(__dirname, "public")
		},
		module:{
			loaders:[
				{test:/\.jsx?/, exclude:/node_modules/, loader:"babel-loader"},
				{test:/\.css$/, loader:"style-loader!css-loader"}
			]
		}
}
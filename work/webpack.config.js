var webpack=require("webpack");
module.exports={
	entry:"./index.js",
	output:{
		filename:"bulidle.js"
	},
	modules:{
		loaders:[
		{
			test:/\.css/,loader:'style!css'
		}
		]
	},
	plugins: [
    new webpack.BannerPlugin('This file is created by zhaoda')
  ]



}
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
module.exports=function(){
	return {
		configureWebpack: {
			plugins: [
				new MonacoWebpackPlugin({
					languages: ["css"],
					features: ["coreCommands", "find"]
				})
			]
		}
  }
}
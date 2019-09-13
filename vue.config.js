module.exports = {
	pluginOptions: {
		electronBuilder: {
			chainWebpackRendererProcess: config => {
        		// Chain webpack config for electron renderer process only
        		config.devServer
	  				.port(8080)
	  				.end();
	  			config
	  				.entry("app")
	  				.clear()
	  				.add("./src-electron/main.js")
	  				.end();
	  			// config.resolve.alias
	  				// .set("@", path.join(__dirname, "./src-electron"))
      		},
			mainProcessFile: "src-electron/background.js"
		}
	}
}
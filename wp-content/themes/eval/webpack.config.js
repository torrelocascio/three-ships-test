// WordPress webpack config.
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

// Plugins.
const RemoveEmptyScriptsPlugin = require( 'webpack-remove-empty-scripts' );

// Utilities.
const path = require( 'path' );

// Add any a new entry point by extending the webpack config.
module.exports = {
	...defaultConfig,
	...{
		entry: {
			'js/index':  path.resolve( process.cwd(), 'resources/js',   'index.js'   ),
			'css/index': path.resolve( process.cwd(), 'resources/scss', 'index.scss' ),
		},
		plugins: [
			// Include WP's plugin config.
			...defaultConfig.plugins,

			// Removes the empty `.js` files generated by webpack but
			// sets it after WP has generated its `*.asset.php` file.
			new RemoveEmptyScriptsPlugin( {
				stage: RemoveEmptyScriptsPlugin.STAGE_AFTER_PROCESS_PLUGINS
			} )
		]
	}
};
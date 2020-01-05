/**
 * Reasons bundling with webpack is preferable
 * -older browsers can't import individual files.
 * -Individual files makes a separate http requests
 * 
 * What is Web Pack?
 * Tool to help bundle files together
 * Bundling and Build Orchestration tool to be able to bundle them together
 * code opitmization/minify(can write readable code as a developer but makes names and code as short as possible)
 * more build tools for css, etc
 * commands to build site, spin up server, etc - more build steps
 * 
 * installing webpack
 * npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader
 * webpack - buncle and compile our code.
 * typescript - also install a version of typescript per project so that a specific verion of typescript is locked in
 * ts-loader - tell webpack how to convert ts to js.
 * 
 * in tsconfig - target: es6 or es5
 * module:es2016 or es6
 * outDir:'./dist'
 * rootDir - get rid of
 * 
 * add webpack.config.js
 * use nodejs environment so module.exports ={} should be used
 * direct webpack to entry of application
 * remove all .js extenstion
 * 
 * const path = require('path'); <--see path name
 * 
 * module.exports ={
 * mode:'development', fewer optimization to improve debugging and more meaningful debugging
 * entry: './src/app.ts',
 * output:{
 * filename: 'bundle.js', filename: 'bundle[contenthash].js' <-- contenthash allows you to create unique hash for every build to help with brower caching
 * path:path.resolve(__dirname, 'dist')//webpack wants an absolute path not relative like './dist'.. we can use a nodejs module using nodejs syntax that uses require. const path = require('path');
 * * publicPath: 'dist'
 * },
 * now need to tell webpack what to do with typescript files
 * devtool: 'inline-source-map', <-- tells webpack will be generated sourcemaps already. it should extract and wire it up to bundle it creates.
 * module:{
 * rules: [
 * //can add more rules for different types of files like css 
 *  we will add a loader which is a package which tells it how to deal with certain files.
 * {test:/\.ts$/, 
 * use: 'ts-loader'<--- loader knows how to deal with the file,
 * exclude: /node_modules/,
 *  } a rule is js object and add a test property. webpack perfroms a on any file it finds test to see if. any file that ends in ts should be dealt with this rule
 * ]
 * },
 * resolve:{ extensions: ['.ts', '.js']} //tells webpack which file extensions it adds to the imports it finds
 * }
 * 
 * then in tsconfig set sourcemap to true -- helps debugging code
 * 
 * to use
 * in package.json
 * "build": "webpack"
 * 
 * ADDING WEBPACK DEV SER
 * 
 * "start": "webpack-dev-server"
 * recompiles but you don't see console log. in wepback dev server mode. dist will remain empty. it's loaded in memory. 
 * in output add
 * 
 * PRODUCTION
 * webpack.prod.config
 * 
 const path = require('path');
 const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'none',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: { extensions: ['.ts', '.js'] },
    plugins: [
        //diff from rules rules to files... pluginsapplied to general workflow.
        ///delete everything in dist folder before generating new files.
        //npm install --save-dev clean-webpack-plugin

        new CleanPlugin.CleanWebpackPlugin();

        "build:" "webpack --condfig webpack.config.prod.js"
    ]
}
 * */
/**
 * Using Watch Mode.
 * tsc 'filname' --watch or -w
 * make it so you don't have to run tsc 'filename' after every change.
 * 
 * multiple files
 * initialize project all files in folder
 * tsc --init 
 * 
 * creates tsconfig.json
 * 
 * tsconfig.json
 * holds compilor optons
 *  in between last 2 closing braces can add include and exclued
 * "exclude":[
 * "file.ts",
 * "*.dev.ts",
 * "**\/*.dev.ts"
 * ]
 * 
 * target - js version you want compiled to
 * 
 * core libs
 * lib[] will go by defaults => default depends on target if commented out. These are the defaults if target is set for es6.
 * "dom" - unlocks dom api
 * "es6" - unlocks es6
 * "dom.iterable"
 * "scripthost"
 * 
 * checkjs- won't compile js but will check js
 * allow js - will compile js
 * 
 * sourcemap - helps with debugging.
 * souces tab in chrome will append js.map files that act as bridge understood by browsers to connect the ts to js files. can place breakpoints in ts file.
 * 
 * outdir - sets the folder where js will be
 * rootdir - can point to src folder and not include other folders in the root level.
 * 
 * remove comments true
 * no emit - true. no outputs
 * noEmitOnError - file created even on errors
 * 
 * code quality under addtional checks
 * 
 * chrome debugger extension and source maps on allow for debugging in vscode.
 */
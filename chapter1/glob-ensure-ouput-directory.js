/*
 * This is how the example in the book looks like:
 *
 * import glob from 'glob'
 * import fs from 'fs-extra'
 * import path from 'path'
 *
 *
 * const [srcRoot, dstRoot] = process.argv.slice(2);
 *
 * glob(`${srcRoot}\/**\/*.*`, {ignore: '*.bck'}, (err, file2s) => {  
 * 	 if(err) {
 *		console.log(err);
 *	} else {
 *		for (const srcName of files){
 *			const dstName = srcName.replace(srcRoot, dstRoot);
 *			const dstDir = path.dirname(dstName);
 *			fs.ensureDir(dstDir, (err) => {
 *				if(err) {
 *					console.error(err);
 *				}
 *			})
 *		}
 *	}
 * });
 *
 * This does not work anymore as apparently glob module
 * has been updated. In the book, the entire chapter tries 
 * to demonstrate the concept of a callback function
 * in the asynchronous JS context. 
 * 
 * As glob has been updated to be a synchronous operation
 * this example is not relevant anymore. 
 * 
 * Here is an updated implementation
 * of the same functionalitty:
 */

import {glob} from 'glob'
import fs from 'fs-extra'
import path from 'path'

try{
	const [srcRoot, dstRoot] = process.argv.slice(2);
 
	const files = await glob(`${srcRoot}/**/*.*`, {ignore: '*.bck'});	
	for (const srcName of files){
 			const dstName = srcName.replace(srcRoot, dstRoot);
 			const dstDir = path.dirname(dstName);
 			fs.ensureDir(dstDir, (err) => {
 				if(err) {
 					console.error(err);
 				}
 			})
	}	
}  catch (err){
	console.log(err);
}



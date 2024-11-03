/*
 * This is how the example in the book looks like:
 *
 * import glob from 'glob'
 * 
 * const [srcDir, dstDir] = process.argv.slice(2);
 *
 * glob(`${srcDisr}\/**\/*.*`, {ignore: '*.bck'}, (err, files) => {  
 * 	 if(err) {
 *		console.log(err);
 *	} else {
 *		for (const srcName of files){
 *			const dstName = srcName.replace(srcDir, dstDir);
 *			console.log(srcName, dstName);
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

try{
	const [srcDir, dstDir] = process.argv.slice(2);
	const res = await glob(`${srcDir}/**/*.*`, {ignore: '*.bck'});	
	for (const srcName of res){
		const dstName = srcName.replace(srcDir, dstDir);
        	console.log(srcName, dstName);
	 }
	
}  catch (err){
	console.log(err);
}



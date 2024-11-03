/*
 * This is how the example in the book looks like:
 *
 * import glob from 'glob'
 * import fs from 'fs-extra'
 * import path from 'path'
 * 
 * const [srcRoot, dstRoot] = process.argv.slice(2);
 * 
 * glob(${srcRoot}\/**\/*.*, { ignore: '*.bck' }, (err, files) => {
 *	if (err) {
 *		console.log(err);
 *	  } else {
 *		for (const srcName of files) {
 *		  fs.stat(srcName, (err, stats) => {
 *			if (err) {
 *			  console.error(err)
 *			} else if (stats.isFile()) {
 *			  const dstName = srcName.replace(srcRoot, dstRoot);
 *			  const dstDir = path.dirname(dstName);
 *			  fs.ensureDir(dstDir, (err) => {
 *				if (err) {
 *				  console.error(err);
 *				} else {
 *				  fs.copy(srcName, dstName, (err) => {
 *					if (err) {
 *					  console.error(err);
 *					}
 *				  });
 *				}
 *			  });
 *			}
 *		  });
 *		}
 *	  }
 *	});
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
 	for (const srcName of files) {
      		const stats = await fs.stat(srcName);
      		if (stats.isFile()) {
        		const dstName = srcName.replace(srcRoot, dstRoot);
        		const dstDir = path.dirname(dstName);
        
        		await fs.ensureDir(dstDir);  
        		await fs.copy(srcName, dstName);  
        		console.log(`Copied ${srcName} to ${dstName}`);
		}
	}
} catch (error) {
	console.error(error)
}

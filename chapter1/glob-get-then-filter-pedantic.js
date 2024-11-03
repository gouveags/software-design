/*
 * This is how the example in the book looks like:
 *
 * import glob from 'glob'
 * 
 * glob('*.*', (err, files) => {  
 * 	 if(err) {
 *		console.log(err);
 *	} else {
 *		files = files.filter((f) => { return !f.endsWith('.bck'); });
 *		for (const filename of files){
 *			console.log(filename);
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
	const res = await glob("**/*.*");	
	const filter = res.filter((f) => { return !f.endsWith('.bck'); });
	for (const fileName of filter){
        	console.log(fileName);
	 }
	
}  catch (err){
	console.log(err);
}



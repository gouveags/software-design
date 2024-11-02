/*
 * This is how the example in the book looks like:
 *
 * import glob from 'glob'
 * 
 * glob('*.*', (err, files) => {  
 * 	 if(err) {
 *		console.log(err);
 *	} else {
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
 * As glob has been updated to the a synchronous operation
 * this example is not relevant anymore. Here is a updated implementation
 * of the same functionalitty anyways.
 */

import {glob} from 'glob'

try{
    const res = await glob("**/*.*");
    for (const fileName of res){
        console.log(fileName);
    }
}  catch (err){
    console.log(err);
}



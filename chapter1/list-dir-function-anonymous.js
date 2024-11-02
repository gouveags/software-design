import fs from 'fs'

const srcDir = process.argv[2];

fs.readdir(srcDir, (err, files) => {
	console.log('running callback');
	if (err) {
		console.log(err);
	} else {
	
		for (const name of files) {
			console.log(name);
		}
	}	
});

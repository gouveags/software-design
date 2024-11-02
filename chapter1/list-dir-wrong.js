import fs from 'fs'

const srcDir = process.argv[2];
const result = fs.readdir(srcDir);

for (const name of result){
	console.log(name);
}

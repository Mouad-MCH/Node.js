import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';


const readPjson = async () => {
    const pjsonPath = fileURLToPath(new URL('./package.json', import.meta.url))
    console.log(JSON.parse(await fs.readFile(pjsonPath, 'utf-8')))
}

const writeFile = async () => {
    const newFile = fileURLToPath(new URL('./demo.js' , import.meta.url));
    await fs.writeFile(newFile, `console.log('hello mouad:)')`);
}


writeFile();
// readPjson();
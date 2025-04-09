// console.log("Hello....")

const http = require('http');
const os = require('os');
const path = require('path')
const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.end("Hello world from B42 we are learning Node js ..")
})
port = 8000

console.log('memory', os.totalmem());
console.log('platform', os.platform());
console.log('free mem', os.freemem());

console.log(__dirname, "directory path" );

const file1 = path.join(__dirname, 'batch42.txt');
const dir1 = path.join(__dirname, 'batch42Folder');

// fs.mkdirSync(dir1);

fs.writeFileSync(file1, 'This is first line...',(e)=>{
    if(e) throw e;
    console.log('file created')
});

fs.writeFileSync(dir1, file1, 'This is first line...',(e)=>{
    if(e) throw e;
    console.log('file created')
});
// fs.readFileSync(file1, 'UTF8',(err, data)=>{
// if(err) throw err;
//     console.log(data);
// });

const readData = fs.readFileSync(file1, 'utf8');
console.log("*************",readData, "****************");

const dirPath = path.join(__dirname, 'myFiles');
const filePath = path.join(dirPath, 'example.txt');
const renamedFilePath = path.join(dirPath, 'renamedExample.txt');

async function fileOperations() {
    try {
      // 1. Create a new directory
      await fs.mkdir(dirPath, { recursive: true });
      console.log('Directory created.');
  
      // 2. Write to a file
      await fs.writeFile(filePath, 'Hello, this is the initial content.\n');
      console.log('File created and content written.');
  
      // 3. Read from the file
      let content = await fs.readFile(filePath, 'utf8');
      console.log('Read file content:\n', content);
  
      // 4. Append to the file
      await fs.appendFile(filePath, 'Appended content here.\n');
      console.log('Content appended.');
  
      // Read again to verify
      content = await fs.readFile(filePath, 'utf8');
      console.log('Updated file content:\n', content);
  
      // 5. Rename the file
      await fs.rename(filePath, renamedFilePath);
      console.log('File renamed.');
  
      // 6. Delete the file
      await fs.unlink(renamedFilePath);
      console.log('File deleted.');
  
      // 7. Delete the directory
      await fs.rmdir(dirPath);
      console.log('Directory deleted.');
      
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  fileOperations();

server.listen(port,()=>{
    console.log(`Server started... http://localhost:${port}`)
})



// localhost - 127.0.0.1




// http://localhost:8000


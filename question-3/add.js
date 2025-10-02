//add.js

const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(process.cwd(), "Logs");
//creates the directory if it does not exist
if(!fs.existsSync(logsDirectory)){
    fs.mkdirSync(logsDirectory);
}
//changes the current directory to the logs directory
process.chdir(logsDirectory)
//creates 10 log files and console logs them
for(let i = 0; i <= 9; i++){
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName,`log file ${i}`);
    console.log(`${fileName}`);
}
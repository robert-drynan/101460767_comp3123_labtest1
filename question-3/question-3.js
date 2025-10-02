// question-3.js

const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(process.cwd(), "Logs");

if (fs.existsSync(logsDirectory)){
    const files = fs.readdirSync(logsDirectory);
    files.forEach(file => {
        const filepath = path.join(logsDirectory, file);
        fs.unlinkSync(filepath);
        console.log(`deleted files...${file}`);
    });
    fs.rmdirSync(logsDirectory);
}else {
    console.log("No logs found.");
}

if(!fs.existsSync(logsDirectory)){
    fs.mkdirSync(logsDirectory);
    console.log("logs dir created")
}

process.chdir(logsDirectory)

for(let i = 1; i <= 10; i++){
    const fileName = `log{i}.txt`;
    fs.writeFileSync(fileName,`log file ${i}`);
    console.log(${fileName});
}
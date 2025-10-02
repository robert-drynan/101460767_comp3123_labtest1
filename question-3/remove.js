//remove.js

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